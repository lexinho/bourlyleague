import axios from 'axios'

export async function increment (row, col) {
  console.log(`[SheetRepo] Incrementing row ${row} col ${col}`)
  const response = await axios.get(
    `http://localhost:5000/increment/${row}/${col}`
  )
  console.log(`[SheetRepo] ${response.data}`)
  return response.data
}
