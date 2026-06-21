export async function waitForMock(ms = 250) {
  await new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

export async function simulateNetwork<TData>(
  data: TData,
  ms = 250,
): Promise<TData> {
  await waitForMock(ms)

  return data
}

export function findById<TItem extends { id: string }>(
  items: TItem[],
  id: string | undefined,
) {
  return items.find((item) => item.id === id) ?? null
}
