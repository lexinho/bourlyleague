import axios from 'axios'

export async function increment (row, col) {
  console.log(`[SheetRepo] Incrementing row ${row} col ${col}`)
  const response = await axios.get(
    `https://bourlyleague.herokuapp.com/increment/${row}/${col}`
  )
  console.log(`[SheetRepo] ${response.data}`)
  return response
}

export async function kill (row, col, killed) {
  console.log(`[SheetRepo] Killing ${killed}`)
  const response = await axios.get(
    `https://bourlyleague.herokuapp.com/kill/${row}/${col}/${killed}`
  )
  console.log(`[SheetRepo] ${response.data}`)
  return response
}

export async function update (row, col, type, count) {
  console.log(`[SheetRepo] Updating ${type}`)
  const response = await axios.get(
    `https://bourlyleague.herokuapp.com/update/${row}/${col}/${count}`
  )
  console.log(`[SheetRepo] ${response.data}`)
  return response
}
