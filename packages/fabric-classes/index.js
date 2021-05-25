export const slider = {
  wrapper: 'f-slider relative w-full h-32',
  track: 'track absolute bg-bluegray-300 h-4 top-14 rounded-4 w-full',
  trackDisabled: 'pointer-events-none',
  activeTrack: 'active-track absolute bg-blue-600 h-4 top-14 rounded-4',
  activeTrackDisabled: 'bg-bluegray-400 pointer-events-none',
  thumb: 'f-thumb absolute w-32 h-32 bottom-0 rounded-full outline-none border-8',
  thumbEnabled: 'shadow border-white cursor-pointer',
  thumbDisabled: 'border-bluegray-200 cursor-disabled pointer-events-none',
  thumbCenter: 'f-thumb-center absolute h-16 w-16 rounded-full transition-transform',
  thumbCenterEnabled: 'bg-blue-600',
  thumbCenterDisabled: 'bg-bluegray-400'
}

export const modal = {
  backdrop: 'f-modal-backdrop fixed inset-0 flex sm:place-content-center sm:place-items-center items-end',
  modal: 'f-modal rounded-8 mx-0 sm:mx-16 bg-white flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content: 'block overflow-y-auto overflow-x-hidden last-child:mb-0 flex-grow flex-shrink',
  footer: 'flex justify-end flex-shrink-0',
  transitionTitle: 'transition-all duration-300',
  title: '-mt-4 sm:-mt-8 h-40 sm:h-48 grid grid-cols-3 items-center px-16 sm:px-32 border-b sm:border-b-0 flex-shrink-0',
  titleText: 'mb-0 h4 sm:h3',
  titleButton: 'button button--pill f-modal-title-button',
  titleButtonLeft: '-ml-8 sm:-ml-12',
  titleButtonRight: '-mr-8 sm:-mr-12',
  titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24'
}

export const box = {
  box: 'group block break-words last-child:mb-0 p-16 rounded-8',
  bleed: '-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8', // we target L and R separately because of TW's rules-order
  clickable: 'cursor-pointer focus-ring'
}

export const step = {
  stepVertical: 'step-v grid grid-flow-col gap-x-16',
  stepVerticalLeft: 'step-v-l',
  stepVerticalRight: 'step-v-r text-right',
  stepHorizontal: 'step-h flex-1 grid gap-y-16 items-center',

  stepDot: 'rounded-full border-2 h-20 w-20 transition-colors duration-300',
  stepDotVertical: '',
  stepDotVerticalLeft: '',
  stepDotVerticalRight: 'col-start-2',
  stepDotHorizontal: 'row-start-2 justify-self-end',

  stepDotActive: 'border-blue-600 bg-white',
  stepDotComplete: 'border-blue-600 bg-blue-600',
  stepDotIncomplete: 'border-bluegray-300 bg-white',

  stepLine: 'step-line transition-colors duration-300',
  stepLineVertical: 'w-2 h-full justify-self-center',
  stepLineVerticalLeft: '',
  stepLineVerticalRight: 'col-start-2',
  stepLineHorizontal: 'h-2 w-full row-start-2',

  stepLineIncomplete: 'bg-bluegray-300',
  stepLineComplete: 'bg-blue-600',

  content: 'last-child:mb-0',
  contentVertical: 'row-span-2 pb-32',
  contentHorizontal: 'col-span-3 px-16 row-start-1 text-center'

}

export const card = {
  card: 'f-card cursor-pointer rounded-8 overflow-hidden relative transition-all outline-none',
  cardOutline: 'f-card-outline absolute rounded-8 inset-0 transition-all border-2 border-transparent'
}

export const switchToggle = {
  label: 'block relative h-24 w-44 cursor-pointer group',
  labelDisabled: 'pointer-events-none',
  switchTrack: 'absolute h-full w-full rounded-full transition-colors',
  switchTrackSelected: 'bg-blue-600 group-hover:bg-blue-700',
  switchTrackUnselected: 'bg-gray-300 group-hover:bg-gray-400',
  switchTrackDisabled: 'bg-bluegray-200',
  switchThumb: 'absolute transition-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  switchThumbSelected: 'f-switch-translate-x',
  switchThumbNotDisabled: 'bg-white shadow-sm',
  switchThumbDisabled: 'bg-bluegray-300'
}

export const toaster = {
  toasterContainer: 'fixed fixed-ios-fix bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none',
  toaster: 'f-toaster grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none'
}

export const toast = {
  toastWrapper: 'overflow-hidden w-full',
  toast: 'toast flex group p-8 mt-16 rounded-8 border-2 w-full pointer-events-auto transition-all',
  toastPositive: 'bg-green-50 border-green-200 text-green-800',
  toastWarning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  toastNegative: 'bg-red-50 border-red-200 text-red-800',
  toastNeutral: 'bg-gray-50 border-gray-200 text-gray-800',
  toastIcon: 'flex-shrink-0 rounded-full w-16 h-16 m-8',
  toastIconPositive: 'bg-green-300',
  toastIconWarning: 'bg-yellow-300',
  toastIconNegative: 'bg-red-300',
  toastIconNeutral: 'bg-gray-300',
  toastIconLoading: 'animate-bounce',
  toastContent: 'self-center mr-8 py-4 last-child:mb-0',
  toastClose: 'ml-auto p-8'
}

export const buttonReset = 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block'
