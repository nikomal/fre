export { 
    h, 
    h as jsx,
    h as jsxs,
    h as jsxDEV
} from './h'
export { render } from './reconciler'
export { useState, useReducer, useEffect, useMemo, useCallback, useRef, useLayout, useLayout as useLayoutEffect } from './hooks'
export * from './type'

export const options: Record<string,Function> = {}
