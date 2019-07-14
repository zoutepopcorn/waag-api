export const groupArrayOfObjectsBy = (array, key) => {
  var i = 0, val, index,
      values = [], result = []
  for (; i < array.length; i++) {
    val = array[i][key]
    index = values.indexOf(val)
    if (index > -1) {
      result[index].push(array[i])
    } else {
      values.push(val)
      result.push([array[i]])
    }
  }
  return result
}

function renameObjectKey(object, oldKey, newKey) {
  Object.defineProperty(object, newKey,
    Object.getOwnPropertyDescriptor(object, oldKey)
  )
  delete object[oldKey]
}


export const inArray = (array, value) => {
  if(array.indexOf(value) !== -1) {
    return true
  } else {
    return false
  }
}


export const formatDataHolu = (latest, all, parameter) => {
  let offlineSensors = []

  const data = all.map(sensor => {
    let sensorData = latest.find(o => +o.id === +sensor.id)

    if(sensorData) {
      return {
        id: sensor.id.toString(),
        name: sensor.name,
        type: "HOLU-sensor",
        coordinates: [sensor.longitude, sensor.latitude],
        mean: sensorData[`${parameter}_mean`],
        max: sensorData[`${parameter}_max`]
      }
    } else {
      offlineSensors.push(sensor.id)

      return {
        id: sensor.id.toString(),
        name: sensor.name + " (offline)",
        type: "HOLU-sensor",
        coordinates: [sensor.longitude, sensor.latitude],
        mean: null,
        max: null
      }
    }
  })

  console.log(`Offline Sensors (${offlineSensors.length}):`, offlineSensors.sort((a, b) => a - b).join(', '))
  return data
}


export const formatDataLuchtmeetnet = (data) => {
  const grouped = groupArrayOfObjectsBy(data, "station_number")

  const latest = grouped.map(sensor => {
    const object = sensor[0]

    renameObjectKey(object, "value", "mean")
    renameObjectKey(object, "station_number", "id")
    object["type"] = "Officieel station"

    object.coordinates = object.coordinates.reverse()

    return object
  })
  return latest
}


export const deepCopy = (obj) => {
  if (typeof obj == 'object') {
    if (Array.isArray(obj)) {
      let l = obj.length
      let r = new Array(l)
      for (let i = 0; i < l; i++) {
        r[i] = deepCopy(obj[i])
      }
      return r
    } else {
      let r = {}
      r.prototype = obj.prototype
      for (let k in obj) {
        r[k] = deepCopy(obj[k])
      }
      return r
    }
  }
  return obj
}
