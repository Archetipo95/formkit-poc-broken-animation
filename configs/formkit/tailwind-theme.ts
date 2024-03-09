// The following Tailwind theme aspires to be a reproduction of the
// default optional Genesis CSS theme that ships with FormKit

export default {
  // Global styles apply to _all_ inputs with matching section keys
  global: {
    fieldset: '',
    help: 'text-xs text-[red]',
    inner:
      'formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
    input:
      'appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none',
    label: 'block',
    legend: 'font-bold text-sm',
    loaderIcon: 'inline-flex items-center w-4 text-[grey]/60 animate-spin',
    message: 'text-[red] text-light-8 pointer-events-none',
    messages: 'list-none pointer-events-none',
    outer: 'relative',
    prefixIcon:
      'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-[grey]/40 bg-neutral-white bg-gradient-to-b from-transparent to-[grey]/20 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
    suffixIcon:
      'w-7 pr-3 p-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  },

  // Family styles apply to all inputs that share a common family
  'family:box': {
    // TODO: use appropriate color for disabled, invalid and focus states
    decorator:
      'block relative mr-3 bg-transparent ring-1 ring-text-primary peer-hover:ring-primitives-grey-200 peer-checked:peer-hover:ring-neutral-black peer-checked:bg-neutral-black formkit-disabled:ring-stroke-inactive formkit-invalid:ring-[red] text-transparent peer-checked:text-neutral-white ring-inset',
    decoratorIcon:
      'flex w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
    help: 'mb-2 mt-1.5',
    input:
      'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
    inner: '$remove:formkit-disabled:bg-[grey]/20',
    label:
      '$reset text-sm text-text-new-primary select-none formkit-disabled:text-text-inactive',
    wrapper:
      'w-full flex items-center mb-1 focus-within:ring-1 focus-within:ring-[blue] py-1 cursor-pointer',
  },
  radio: {
    decorator: 'rounded-full',
    decoratorIcon: '',
  },
  'family:button': {
    input:
      '$reset inline-flex items-center bg-[blue]/60 text-neutral-white text-sm font-normal py-3 px-6 rounded focus-visible:outline-2 focus-visible:outline-[blue]/60 focus-visible:outline-offset-2 formkit-disabled:bg-[grey] formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-neutral-white formkit-loading:before:animate-spin',
    wrapper: 'mb-1',
    prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
    suffixIcon: '$reset block w-4 ml-2 stretch',
  },
  'family:dropdown': {
    outer: 'h-[72px]',
    dropdownWrapper: 'w-full [&::-webkit-scrollbar]:hidden',
    emptyMessageInner:
      'flex items-center justify-center text-sm p-2 text-center w-full text-[grey]/50 [&>span]:mr-3 [&>span]:ml-0',
    inner: 'relative flex border-b',
    input: 'w-full',
    listbox:
      'bg-neutral-white overflow-hidden border border-primitives-grey-100 z-10',
    listboxButton: 'flex w-12 self-stretch justify-center mx-auto',
    listitem:
      'pl-2 !text-light-6 relative hover:bg-[grey]/30 data-[is-active="true"]:bg-[grey]/30 aria-selected:bg-primitives-grey-200 aria-selected:text-neutral-white data-[is-active="true"]:aria-selected:bg-primitives-grey-200 data-[is-active="true"]:aria-selected:bg-primitives-grey-200 cursor-pointer',
    loaderIcon: 'hidden',
    loadMoreInner: 'hidden',
    option: 'p-2.5 text-light-6',
    optionLoading: 'pl-2.5 text-[grey]',
    placeholder: 'h-5',
    message: '',
    messages: 'pl-2 text-light-8 mt-[8.5px]',
    selector:
      'relative flex w-full items-center justify-between cursor-pointer p-2 pt-5 pr-0 gap-1 focus-visible:outline-0',
    selection:
      'flex overflow-hidden [&>*]:shrink-0 w-full [&>*]:p-0 [&>*]:text-book-6 cursor-pointer',
    selectedIcon: 'hidden',
    selectIcon: 'flex box-content h-5 w-5 cursor-pointer',
    wrapper: 'relative',
    label: 'text-light-6 h-5',
  },
  'family:text': {
    outer:
      'focus-within:ring-primitives-blue focus-within:ring-1 [&>label:first-child]:focus-within:text-primitives-blue h-[72px] w-full formkit-disabled:opacity-20',
    inner: 'flex items-center border-b pb-2 pt-5 pl-2',
    input:
      'w-full text-book-6 placeholder-[grey] h-[20px] formkit-invalid:text-primitives-red',
    label: 'text-light-6',
    messages:
      'text-primitives-red text-light-8 pointer-events-none ml-2 mt-[8.5px]',
    message: '',
  },
  'family:date': {
    inner:
      'flex items-center max-w-md ring-1 ring-[grey] focus-within:ring-[blue]/50 focus-within:ring-2 [&>label:first-child]:focus-within:text-[blue]/50 rounded mb-1',
    input: 'w-full px-3 py-2 border-none text-[grey]/70 placeholder-[grey]',
  },

  // Specific styles apply only to a given input type
  color: {
    inner:
      'flex max-w-[5.5em] w-full formkit-prefix-icon:max-w-[7.5em] formkit-suffix-icon:formkit-prefix-icon:max-w-[10em]',
    input:
      '$reset appearance-none w-full cursor-pointer border-none rounded p-0 m-0 bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none',
    suffixIcon: 'min-w-[2.5em] pr-0 pl-0 m-auto',
  },
  file: {
    fileItem: 'flex items-center text-[grey]/80 mb-1 last:mb-0',
    fileItemIcon: 'w-4 mr-2 shrink-0',
    fileList:
      'shrink grow peer px-3 py-2 formkit-multiple:data-[has-multiple="true"]:mb-6',
    fileName: 'break-all grow text-ellipsis',
    fileRemove:
      'relative z-[2] ml-auto text-[0px] hover:text-[red]/50 pl-2 peer-data-[has-multiple=true]:text-sm peer-data-[has-multiple=true]:text-[blue]/50 peer-data-[has-multiple=true]:ml-3 peer-data-[has-multiple=true]:mb-2 formkit-multiple:bottom-[0.15em] formkit-multiple:pl-0 formkit-multiple:ml-0 formkit-multiple:left-[1em] formkit-multiple:formkit-prefix-icon:left-[3.75em]',
    fileRemoveIcon: 'block text-base w-3 relative z-[2]',
    inner:
      'relative max-w-md cursor-pointer formkit-multiple:[&>button]:absolute',
    input:
      'cursor-pointer text-transparent absolute top-0 right-0 left-0 bottom-0 opacity-0 z-[2]',
    noFiles: 'flex w-full items-center px-3 py-2 text-[grey]',
    noFilesIcon: 'w-4 mr-2',
  },
  range: {
    inner: '$reset flex items-center max-w-md',
    input: '$reset w-full mb-1 h-2 p-0 rounded-full',
    prefixIcon:
      '$reset w-4 mr-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
    suffixIcon:
      '$reset w-4 ml-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  },
  select: {
    inner:
      'flex relative max-w-md items-center rounded mb-1 ring-1 ring-[grey] focus-within:ring-[blue]/50 focus-within:ring-2 [&>span:first-child]:focus-within:text-[blue]/50',
    input:
      'w-full pl-3 pr-8 py-2 border-none text-base text-[grey]/70 placeholder-[grey] formkit-multiple:p-0 data-[placeholder="true"]:text-[grey] formkit-multiple:data-[placeholder="true"]:text-inherit',
    selectIcon:
      'flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none [&>svg]:w-[1em]',
    option: 'formkit-multiple:p-3 formkit-multiple:text-sm text-[grey]/70',
  },
  textarea: {
    inner:
      'flex max-w-md rounded mb-1 ring-1 ring-[grey] focus-within:ring-[blue]/50 [&>label:first-child]:focus-within:text-[blue]/50',
    input:
      'block w-full h-32 px-3 py-3 border-none text-base text-[grey]/70 placeholder-[grey] focus:shadow-outline',
  },

  // PRO input styles
  autocomplete: {
    closeIcon: 'block grow-0 shrink-0 w-3 mr-3.5',
    inner: '[&>div>[data-value]]:absolute [&>div>[data-value]]:mb-0',
    option: 'grow text-ellipsis',
    selection:
      'static flex left-0 top-0 right-0 bottom-0 mt-0 mb-2 rounded bg-[grey]/10',
  },
  colorpicker: {
    outer: `
      group
      formkit-disabled:cursor-not-allowed
    `,
    help: `
      group-[[data-inline]]:-mt-1
      group-[[data-inline]]:mb-2
    `,
    inner: `
      relative
      inline-flex
      group-[[data-inline]]:shadow-none
      group-[[data-inline]]:!ring-1
      group-[[data-inline]]:!ring-[grey]
    `,
    swatchPreview: `
      w-full
      flex
      justify-start
      items-center
      p-3
      rounded-md
      text-sm
      cursor-pointer
      outline-none
    `,
    canvasSwatchPreviewWrapper: `
      relative
      before:content-['']
      before:absolute
      before:top-0
      before:left-0
      before:w-full
      before:h-full
      before:rounded-sm
      before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]
      before:z-[2]
    `,
    canvasSwatchPreview: `
      rounded
      aspect-[2/1]
      w-10
    `,
    valueString: `
      inline-block
      ml-2
      mr-1
    `,
    panel: `
      flex
      flex-col
      max-w-[300px]
      p-2
      rounded
      bg-neutral-white
      touch-manipulation
      absolute
      w-[100vw]
      top-full
      left-0
      border
      shadow-xl
      z-10
      group-[[data-inline]]:static
      group-[[data-inline]]:w-auto
      group-[[data-inline]]:shadow-none
      group-[[data-inline]]:z-auto
      [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed
      [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto
      [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none
      [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0
      [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0
      [@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none
    `,
    panelClose: `
      flex
      justify-end
      items-center
      mb-1
      -mt-1
      border-none
      bg-none
      border-b
      w-[calc(100%+1rem)]
      -ml-2
      pt-0
      pr-2
      pb-1
      pl-2
    `,
    closeIcon: `
      w-[2rem]
      aspect-square
      p-1
      rounded-full
      border
      [&>svg]:w-full
      [&>svg]:aspect-square
      [&>svg]:max-w-none
      [&>svg]:max-h-none
    `,
    controlGroup: `
      grid
      [grid-template-areas:'a_a_a'_'b_c_e'_'b_d_e']
      mb-2
    `,
    canvas: `
      block
      w-full
    `,
    canvasLS: `
      aspect-[2/1]
      cursor-pointer
      rounded-sm
    `,
    LS: `
      [grid-area:a]
      relative
      mb-2
    `,
    preview: `
      [grid-area:b]
      w-8
      inline-flex
      relative
      rounded
      overflow-hidden
      aspect-square
      rounded-sm
      after:content-['']
      after:absolute
      after:top-0
      after:left-0
      after:w-full
      after:h-full
      after:rounded-sm
      after:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]
    `,
    hue: `
      [grid-area:c]
      relative
      inline-flex
      h-3/4
      ml-2
    `,
    alpha: `
      [grid-area:d]
      relative
      inline-flex
      h-3/4
      ml-2
    `,
    eyeDropper: `
      [grid-area:e]
      p-1.5
      ml-2
      inline-flex
      self-center
      justify-self-center
      aspect-square
      rounded-sm
      border
      cursor-pointer
      content-center
      items-center
    `,
    eyeDropperIcon: `
      w-auto
      [&>svg]:w-5
    `,
    control: `
      absolute
      bg-neutral-white
      shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]
      -translate-x-1/2
      -translate-y-1/2
      pointer-events-none
      data-[prevent-focus-style]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]
      focus-visible:outline-none
      focus-visible:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2),0_0_0_4px_rgba(59,130,246,1),0_0_0_5px_rgba(0,0,0,1)]
    `,
    controlLS: `
      w-[10px]
      h-[10px]
      rounded-full
    `,
    controlHue: `
      w-[4px]
      h-[calc(100%-2px)]
      top-1/2
      rounded-[1px]
    `,
    controlAlpha: `
      w-[4px]
      h-[calc(100%-2px)]
      top-1/2
      rounded-[1px]
    `,
    formatField: `
      flex
      items-center
      justify-center
      grow
    `,
    colorInputGroup: `
      flex
      items-center
      justify-center
      grow
    `,
    fieldGroup: `
      flex
      flex-col
      items-center
      justify-center
      w-full
      mr-1
      [&>input]:p-1
      [&>input]:text-sm
      [&>input]:m-0
      [&>input]:grow
      [&>input]:shrink
      [&>input]:w-full
      [&>input]:border
      [&>input]:rounded-sm
      [&>input]:text-center
      [&>input]:appearance-none
      [&>input::-webkit-outer-spin-button]:appearance-none
      [&>input::-webkit-inner-spin-button]:appearance-none
      [&>input::-webkit-inner-spin-button]:m-0
      [&>input:focus]:outline-none
      [&>input:focus]:ring
      [&>input:focus]:ring-[blue]/50
      max-[431px]:[&>input]:text-base
    `,
    fieldLabel: `
      text-xs
      mt-1
      opacity-50
    `,
    formatSwitcher: `
      flex
      justify-end
      self-start
      mt-1
      uppercase
      shrink-0
      p-1
      rounded-sm
      select-none
    `,
    switchIcon: `
      [&>svg]:w-3
    `,
    swatches: `
      flex
      flex-wrap
      w[calc(100%+0.5rem)]
      -ml-1
      pt-2
      pb-2
      mt-2
      -mb-2
      border-t
      overflow-auto
      max-h-[200px]
      select-none
      first:-mt-2
      first:border-t-0
    `,
    swatchGroup: `
      flex
      flex-wrap
      w-full
      mb-2
      last:mb-0
    `,
    swatchGroupLabel: `
      block
      w-full
      text-sm
      opacity-50
    `,
    swatch: `
      relative
      w-full
      max-w-[calc((100%/10)-0.5rem)]
      aspect-square
      m-1
      cursor-pointer
      before:content-['']
      before:absolute
      before:top-0
      before:left-0
      before:w-full
      before:h-full
      before:rounded-sm
      before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]
      before:pointer-events-none
      before:z-[2]
      data-[active='true']:after:content-['']
      data-[active='true']:after:block
      data-[active='true']:after:absolute
      data-[active='true']:after:w-1.5
      data-[active='true']:after:h-1.5
      data-[active='true']:after:top-1/2
      data-[active='true']:after:left-1/2
      data-[active='true']:after:pointer-events-none
      data-[active='true']:after:rounded-full
      data-[active='true']:after:-translate-x-1/2
      data-[active='true']:after:-translate-y-1/2
      data-[active='true']:after:bg-neutral-white
      data-[active='true']:after:z-[2]
      data-[active='true']:after:ring-1
      data-[active='true']:after:ring-[rgba(0,0,0,0.33)]
      [&>canvas]:block
      [&>canvas]:w-full
      [&>canvas]:aspect-square
      [&>canvas]:rounded-sm
      [&>canvas:focus-visible]:outline-none
      [&>canvas:focus-visible]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(59,130,246,1)]
    `,
  },
  datepicker: {
    inner: 'relative',
    panelWrapper:
      'absolute top-[calc(100%_+_0.5em)] shadow-[0_0_1.25em_rgba(0,0,0,.25)] rounded-md p-5 bg-neutral-white z-10',
    panelHeader:
      'grid grid-cols-[2.5em_1fr_2.5em] justify-center items-center border-b-2 mb-4 pb-4',
    input: 'selection:bg-[blue]/40',
    monthsHeader: 'flex items-center justify-center col-start-2 col-end-2',
    timeHeader: 'flex items-center justify-center col-start-2 col-end-2',
    overlayPlaceholder: 'text-[grey]',
    months: 'flex flex-wrap',
    month: `
      flex items-center justify-center
      w-[calc(33%_-_1em)] m-2 p-2 rounded-md
      bg-[grey]/20
      aria-selected:bg-[blue]/50 aria-selected:text-neutral-white
      focus:outline focus:outline-2 focus:outline-[blue]/50 focus:outline-offset-2 focus:bg-neutral-white focus:text-neutral-black
      data-[is-extra=true]:opacity-25
      formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none
    `,
    yearsHeader: 'flex items-center justify-center col-start-2 col-end-2',
    years: 'flex flex-wrap max-w-[35em]',
    year: `
      flex items-center justify-center
      w-[calc(20%_-_1em)] m-2 p-2 rounded-md
      bg-[grey]/20
      aria-selected:bg-[blue]/50 aria-selected:text-neutral-white
      focus:outline focus:outline-2 focus:outline-[blue]/50 focus:outline-offset-2 focus:bg-neutral-white focus:text-neutral-black
      data-[is-extra=true]:opacity-25
      formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none
    `,
    weekDays: 'flex',
    weekDay:
      'flex w-[2.25em] h-[1em] m-1 items-center justify-center rounded-md font-medium lowercase',
    week: 'flex formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none',
    dayCell: `
      flex items-center justify-center
      w-[2.25em] h-[2.25em] m-1 p-2 rounded-md
      bg-[grey]/20
      aria-selected:bg-[blue]/50 aria-selected:text-neutral-white
      focus:outline focus:outline-2 focus:outline-[blue]/50 focus:outline-offset-2 focus:bg-neutral-white focus:text-neutral-black
      data-[is-extra=true]:opacity-25
      formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none
    `,
    timeInput:
      'w-full border-2 border-[grey]/30 rounded-md p-2 my-[2em] focus-visible:outline-[blue]/50',
    daysHeader: 'flex items-center justify-center',
    prev: 'mr-auto px-3 py-1 hover:bg-[grey]/10 hover:rounded-lg col-start-1 col-end-1',
    prevLabel: 'hidden',
    prevIcon: 'flex w-3 select-none [&>svg]:w-full',
    dayButton:
      'appearance-none cursor-pointer px-3 py-1 border-2 rounded-lg mx-1 hover:border-[blue]/50',
    monthButton:
      'appearance-none cursor-pointer px-3 py-1 border-2 rounded-lg mx-1 hover:border-[blue]/50',
    yearButton:
      'appearance-none cursor-pointer px-3 py-1 border-2 rounded-lg mx-1 hover:border-[blue]/50',
    next: 'ml-auto px-3 py-1 hover:bg-[grey]/10 hover:rounded col-start-3 col-end-3',
    nextLabel: 'hidden',
    nextIcon: 'flex w-3 select-none [&>svg]:w-full',
    openButton: `
      appearance-none border-0 bg-transparent flex p-0 self-stretch cursor-pointer
      focus-visible:outline-none focus-visible:text-neutral-white focus-visible:bg-[blue]/50
    `,
    calendarIcon:
      'flex w-8 grow-0 shrink-0 self-stretch select-none [&>svg]:w-full [&>svg]:m-auto [&>svg]:max-h-[1em] [&>svg]:max-w-[1em]',
  },
  dropdown: {
    tagsWrapper: 'max-w-[calc(100%_-_35px)]',
    tags: 'flex items-center flex-wrap gap-1 mx-2 my-1.5',
    tag: 'flex items-center rounded-full bg-[grey]/20 text-xs text-neutral-black py-1 px-2.5 cursor-default',
    tagLabel: 'px-1',
    selectionsWrapper: 'flex w-[calc(100%_-_35px)] overflow-hidden',
    selections: 'inline-flex items-center px-2.5',
    selectionsItem: 'neutral-whitespace-nowrap mr-1 last:mr-0',
    truncationCount:
      'flex items-center neutral-whitespace-nowrap justify-center rounded text-neutral-white bg-[grey]/50 font-bold text-xs px-1 py-0.5',
    removeSelection: 'block w-2.5 my-1 cursor-pointer',
  },
  rating: {
    inner: 'relative flex items-center w-[8em] formkit-disabled:bg-transparent',
    itemsWrapper: 'w-full',
    onItems: 'text-yellow-400',
    onItemWrapper:
      '[&>*]:w-full [&>svg]:h-auto [&>svg]:max-w-none [&>svg]:max-h-none',
    offItems: 'text-[grey]/50',
    offItemWrapper:
      '[&>*]:w-full [&>svg]:h-auto [&>svg]:max-w-none [&>svg]:max-h-none',
  },
  repeater: {
    content: 'grow p-3 flex flex-col align-center',
    controlLabel: 'absolute opacity-0 pointer-events-none',
    controls: 'flex flex-col items-center justify-center bg-[grey]/10 p-3',
    downControl:
      'hover:text-[blue]/50 disabled:hover:text-inherit disabled:opacity-25',
    fieldset: 'py-4 px-5',
    help: 'mb-2 mt-1.5',
    item: 'flex w-full mb-1 rounded border border-[grey]/40',
    moveDownIcon: 'block w-3 my-1',
    moveUpIcon: 'block w-3 my-1',
    removeControl:
      'hover:text-[blue]/50 disabled:hover:text-inherit disabled:opacity-25',
    removeIcon: 'block w-5 my-1',
    upControl:
      'hover:text-[blue]/50 disabled:hover:text-inherit disabled:opacity-25',
  },
  slider: {
    outer: 'max-w-md',
    help: 'mt-0 mb-1',
    sliderInner:
      'flex items-center py-1 [&>.formkit-max-value]:mb-0 [&>.formkit-max-value]:ml-8 [&>.formkit-max-value]:shrink [&>.formkit-max-value]:grow-0 [&>.formkit-icon]:bg-none [&>.formkit-icon]:border-none [&>.formkit-icon]:p-0 [&>.formkit-icon]:w-4 [&>.formkit-prefix-icon]:mr-2 [&>.formkit-suffix-icon]:ml-2 [&[data-has-mark-labels="true"]_.formkit-track]:mb-4',
    track: 'grow relative z-[3] py-1 user-select-none',
    trackWrapper: 'px-[2px] rounded-full bg-[grey]/20',
    trackInner: 'h-[6px] mx-[2px] relative',
    fill: 'h-full rounded-full absolute top-0 mx-[-4px] bg-[blue]/50',
    marks: 'absolute pointer-events-none left-0 right-0 top-0 bottom-0',
    mark: 'absolute top-1/2 w-[3px] h-[3px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-[grey] data-[active="true"]:bg-neutral-white',
    markLabel:
      'absolute top-[calc(100%+0.5em)] left-1/2 text-[grey] text-[0.66em] -translate-x-1/2',
    handles: 'm-0 p-0 list-none',
    handle:
      'group w-4 h-4 rounded-full bg-neutral-white absolute top-1/2 left-0 z-[2] -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.8)] focus-visible:outline-0 focus-visible:ring-2 ring-[blue]/50 data-[is-target="true"]:z-[3]',
    tooltip:
      'absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-[4px] bg-[blue]/50 text-neutral-white py-1 px-2 text-xs leading-none neutral-whitespace-nowrap rounded-sm opacity-0 pointer-events-none transition-opacity after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-[1px] after:border-4 after:border-transparent after:border-t-[blue]/50 group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[show-tooltip="true"]:opacity-100',
    linkedValues: 'flex items-start justify-between',
    minValue:
      'grow max-w-[45%] mb-0 relative [&_.formkit-inner::after]:content-[""] [&_.formkit-inner::after]:absolute [&_.formkit-inner::after]:left-[105%] [&_.formkit-inner::after]:-translate-y-1/2 [&_.formkit-inner::after]:w-[10%] [&_.formkit-inner::after]:h-[1px] [&_.formkit-inner::after]:bg-[grey]/50',
    maxValue: 'grow max-w-[45%] mb-0 relative',
    chart:
      'relative z-[2] mb-2 flex justify-between items-center w-full aspect-[3/1]',
    chartBar:
      'absolute bottom-0 h-full bg-[grey] opacity-[.66] data-[active="false"]:opacity-[.25]',
  },
  taglist: {
    input: 'px-1 py-1 w-[0%] grow',
    removeSelection: 'w-2.5 mx-1 self-center text-neutral-black leading-none',
    tag: 'flex items-center my-1 p-1 bg-[grey]/20 text-xs rounded-full',
    tagWrapper:
      'mr-1 focus:outline-none focus:text-neutral-white [&>div]:focus:bg-[blue]/50 [&>div>button]:focus:text-neutral-white',
    tagLabel: 'pl-2 pr-1',
    tags: 'flex items-center flex-wrap w-full py-1.5 px-2',
  },
  toggle: {
    altLabel: 'block w-full mb-1 font-bold text-sm',
    inner: '$reset inline-block mr-2',
    input: 'peer absolute opacity-0 pointer-events-none',
    innerLabel:
      'text-[10px] font-bold absolute left-full top-1/2 -translate-x-full -translate-y-1/2 px-1',
    thumb:
      'relative left-0 aspect-square rounded-full transition-all w-5 bg-[grey]/10',
    track:
      'p-0.5 min-w-[3em] relative rounded-full transition-all bg-[grey] peer-checked:bg-[blue]/50 peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0',
    valueLabel: 'font-bold text-sm',
    wrapper: 'flex flex-wrap items-center mb-1',
  },
  transferlist: {
    outer: `
      [&_.dnd-placeholder]:bg-[blue]/50 [&_.dnd-placeholder]:text-neutral-white
      [&_.dnd-placeholder_svg]:text-neutral-white
      [&_.dnd-children-hidden]:w-full [&_.dnd-children-hidden]:p-0 [&_.dnd-children-hidden]:flex [&_.dnd-children-hidden]:flex-col [&_.dnd-children-hidden]:border-none
      [&_.dnd-children-hidden_span]:hidden
      [&_.dnd-children-hidden_.formkit-transferlist-option]:hidden
      [&_.dnd-multiple-selections_span]:inline-block
      [&_.dnd-multiple-selections_.formkit-transferlist-option]:inline-block
    `,
    fieldset: '$reset max-w-2xl',
    wrapper:
      'flex max-h-[350px] flex-col sm:flex-row justify-between w-full max-w-none',
    help: 'pb-2',
    transferlist:
      'sm:w-3/5 shadow-md flex flex-col min-h-[350px] max-h-[350px] border rounded overflow-hidden select-none bg-[grey]/10',
    transferlistHeader:
      'flex bg-[grey]/10 justify-between items-center border-b p-3',
    transferlistHeaderItemCount: 'ml-auto text-sm',
    transferlistListItems:
      'list-none bg-[grey]/10 h-full sm:max-w-xs overflow-x-hidden overflow-y-auto',
    transferlistListItem:
      'pl-8 relative aria-selected:bg-[blue]/60 aria-selected:data-[is-active=true]:bg-[blue]/60 aria-selected:text-neutral-white aria-selected:data-[is-active=true]:text-neutral-white first:-mt-px first:border-t py-2 px-3 flex relative border-b bg-neutral-white data-[is-active=true]:text-[blue]/50 data-[is-active=true]:bg-[grey]/10 cursor-pointer group-data-[is-max=true]:cursor-not-allowed items-center',
    transferlistOption: 'text-sm',
    transferControls:
      'flex sm:flex-col justify-center mx-auto my-2 sm:mx-2 sm:my-auto border rounded',
    transferlistButton:
      'text-sm disabled:cursor-not-allowed disabled:bg-[grey]/20 disabled:opacity-50 first:rounded-l last:rounded-r sm:first:rounded-t sm:last:rounded-b appearance-none p-2 m-0 cursor-pointer h-10 border-none rounded-none bg-[grey]/10 hover:outline disabled:hover:outline-none hover:outline-1 hover:outline-neutral-black hover:text-[blue]/50 disabled:hover:text-current hover:z-10',
    sourceEmptyMessage:
      'appearance-none border-none w-full p-0 m-0 text-center text-[grey]/50 italic',
    sourceListItems: 'group-data-[is-max=true]:opacity-50',
    targetEmptyMessage:
      'appearance-none border-none w-full p-0 m-0 text-center text-[grey]/50 italic',
    emptyMessageInner: 'flex items-center justify-center p-2 text-sm',
    transferlistControls: 'bg-neutral-white px-3 py-2 border-b',
    transferlistSearch: 'flex border rounded items-center',
    transferlistSearchInput:
      'border-none p-1 w-full bg-transparent outline-none text-sm',
    controlLabel: 'hidden',
    selectedIcon: 'w-3 absolute left-3 select-none',
    fastForwardIcon:
      'w-10 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0',
    moveRightIcon:
      'w-10 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0',
    moveLeftIcon:
      'w-10 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0',
    rewindIcon:
      'w-10 flex select-none [&>svg]:m-auto [&>svg]:w-full [&>svg]:max-w-[1rem] [&>svg]:max-h-[1rem] rotate-90 sm:rotate-0',
  },
}