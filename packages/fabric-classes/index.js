export const slider = {
  wrapper: 'relative w-full h-32',
  track: 'track absolute bg-bluegray-300 h-4 top-14 rounded-4 w-full',
  activeTrack: 'active-track absolute bg-blue-600 h-4 top-14 rounded-4',
  thumb: 'thumb absolute w-32 h-32 bottom-0 bg-blue-600 rounded-full outline-none border-8 border-white cursor-pointer'
}

export const modal = {
  backdrop: 'fixed inset-0 grid place-content-center backdrop',
  modal: 'modal rounded-8 bg-white flex flex-col overflow-hidden outline-none',
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
  stepVerticalLeft: 'ml-24 pl-16',
  stepVerticalRight: 'mr-24 pr-16 text-right',
  stepHorizontal: 'step-h flex items-center flex-1',

  stepDot: 'rounded-full border-4 h-24 w-24 transition-colors duration-300',
  stepDotVertical: 'absolute top-4',
  stepDotVerticalLeft: '-left-24',
  stepDotVerticalRight: '-right-24',
  stepDotHorizontal: '',

  stepDotActive: 'border-aqua-400 bg-white',
  stepDotComplete: 'border-aqua-400 bg-aqua-400',
  stepDotIncomplete: 'border-bluegray-300 bg-white',

  stepLine: 'step-line transition-colors duration-300',
  stepLineVertical: 'absolute w-4 h-full top-28',
  stepLineVerticalLeft: '-left-14',
  stepLineVerticalRight: '-right-14',
  stepLineHorizontal: 'h-4 w-full top-10 flex-1',

  stepLineIncomplete: 'bg-bluegray-300',
  stepLineComplete: 'bg-aqua-400'
}

export const buttonReset = 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block'
