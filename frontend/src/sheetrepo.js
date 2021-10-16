import axios from 'axios'

export async function increment (row, col) {
  console.log(`[SheetRepo] Incrementing row ${row} col ${col}`)
  const response = await axios.get(
    `http://localhost:5000/increment/${row}/${col}`
  )
  console.log(`[SheetRepo] ${response.data}`)
  return response.data
}

export async function kill (row, col, killed) {
  console.log(`[SheetRepo] Killing ${killed}`)
  const response = await axios.get(
    `http://localhost:5000/kill/${row}/${col}/${killed}`
  )
  console.log(`[SheetRepo] ${response.data}`)
  return response.data
}
