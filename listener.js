/**
 * https://github.com/goatandsheep/closed-captions-listener
 */
let toggle = false
// TODO: make array of toggles for each track
let showCall = () => ''
let hideCall = () => ''
let visible = false

function tempCheck(evt) {
    toggle = evt.target.track.activeCues.length
    // TODO: fix timeStamp value
    if (toggle) {
        showCall(evt.timeStamp)
    } else {
        hideCall(evt.timeStamp)
    }
}

/**
 * Listener for closed captions video events
 * @param {String} vidId 
 * @param {Function} showCallback callback when cue is shown
 * @param {Function} hideCallback callback when cue is hidden
 */
function closedCaptionsListener(vidEl, showCallback, hideCallback) {
    const trax = vidEl.getElementsByTagName('track')
    showCall = showCallback
    hideCall = hideCallback
    for (let elRef = 0, len = trax.length; elRef < len; elRef++) {
        const el = trax[elRef]
        el.addEventListener('cuechange', tempCheck)
    }
    
    vidEl.addEventListener('pause', () => handlePause());
    vidEl.addEventListener('play', () => handlePlay());
}

function handlePause() {
    if (visible = true) {
      hideCall();
    }
  }
  function handlePlay() {
    if (visible = true) {
      showCall();
    }
  }