import '@testing-library/jest-dom'

// Mock do IntersectionObserver
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.IntersectionObserver = IntersectionObserverMock as any
