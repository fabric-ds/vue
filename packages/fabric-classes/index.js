export const slider = {
  wrapper: 'relative w-full h-32',
  track: 'track absolute bg-bluegray-300 h-4 top-14 rounded-4 w-full',
  activeTrack: 'active-track absolute bg-blue-600 h-4 top-14 rounded-4',
  activeTrackDisabled: 'bg-bluegray-400 pointer-events-none',
  thumb: 'thumb absolute w-32 h-32 bottom-0 rounded-full outline-none border-8',
  thumbEnabled: 'thumb-shadow border-white cursor-pointer',
  thumbDisabled: 'border-bluegray-200 cursor-disabled pointer-events-none',
  thumbCenter: 'thumb-center absolute h-16 w-16 rounded-full transition-transform',
  thumbCenterEnabled: 'bg-blue-600',
  thumbCenterDisabled: 'bg-bluegray-400'
}

export const modal = {
  backdrop: 'fixed inset-0 flex sm:place-content-center sm:place-items-center backdrop items-end',
  modal: 'modal rounded-8 mx-0 sm:mx-16 bg-white flex flex-col overflow-hidden outline-none',
  content: 'block overflow-y-auto overflow-x-hidden last-child:mb-0',
  footer: 'flex justify-end'
}

export const box = {
  box: 'group block break-words last-child:mb-0 p-16 rounded-8',
  bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // we target L and R separately because of TW's rules-order
  clickable: 'cursor-pointer focus-ring'
}

export const step = {
  stepVertical: 'step-v relative pb-16',
  stepVerticalLeft: 'ml-20 pl-16',
  stepVerticalRight: 'mr-20 pr-16 text-right',
  stepHorizontal: 'step-h flex items-center flex-1',

  stepDot: 'rounded-full border-2 h-20 w-20 transition-colors duration-300',
  stepDotVertical: 'absolute top-2',
  stepDotVerticalLeft: '-left-20',
  stepDotVerticalRight: '-right-20',
  stepDotHorizontal: '',

  stepDotActive: 'border-blue-600 bg-white',
  stepDotComplete: 'border-blue-600 bg-blue-600',
  stepDotIncomplete: 'border-bluegray-300 bg-white',

  stepLine: 'step-line transition-colors duration-300',
  stepLineVertical: 'absolute w-2 h-full step-line-vertical-top',
  stepLineVerticalLeft: 'step-line-left',
  stepLineVerticalRight: 'step-line-right',
  stepLineHorizontal: 'h-2 w-full top-10 flex-1',

  stepLineIncomplete: 'bg-bluegray-300',
  stepLineComplete: 'bg-blue-600'
}

export const buttonReset = 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block'
