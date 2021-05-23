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
  backdrop: 'f-modal-backdrop fixed inset-0 flex sm:place-content-center sm:place-items-center items-end',
  modal: 'f-modal rounded-8 mx-0 sm:mx-16 bg-white flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 f-modal-mobile-padding sm:pb-32 rounded-b-0 sm:rounded-b-8',
  content: 'block overflow-y-auto overflow-x-hidden last-child:mb-0 flex-grow flex-shrink',
  footer: 'flex justify-end flex-shrink-0',
  title: '-mt-4 sm:-mt-8 h-40 sm:h-48 grid grid-cols-3 items-center px-16 sm:px-32 border-b sm:border-b-0 flex-shrink-0',
  titleText: 'mb-0 h4 sm:h3',
  titleButton: 'button button--pill smaller-mobile-kill-sometime',
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

export const buttonReset = 'focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block'
