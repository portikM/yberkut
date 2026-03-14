export function track(event: string, data?: Record<string, string | number | boolean>) {
  window.umami?.track(event, data)
}
