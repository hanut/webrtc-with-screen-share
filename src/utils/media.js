import { MediaErrorMessages } from "../labels";

// Local stream that will be reproduced on the video.
/**
 * @type MediaStream
 */
export let localStream;
// Video Element to play on
let videoEle;

export async function testForVideo() {
  try {
    await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    return true;
  } catch (error) {
    if (error.code && error.code === 8) {
      alert(MediaErrorMessages.NoCam);
    } else if (error.message === "Permission denied") {
      alert(MediaErrorMessages.NoCamPerm);
    } else {
      console.warn(error.message);
    }
    return false;
  }
}

export async function testForAudio() {
  try {
    await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    return true;
  } catch (error) {
    if (error.code) {
      alert(MediaErrorMessages.NoMic);
    } else if (error.message === "Permission denied") {
      alert(MediaErrorMessages.NoMicPerm);
    } else {
      console.warn(error);
    }
    return false;
  }
}

/**
 * setLocalAudioState sets the audio state to enabled or disabled
 * based on the 'state' argument passed to it.
 *
 * @param {boolean} state
 */
export async function setLocalAudioState(state = false) {
  const ms0 = localStream.getAudioTracks()[0];
  ms0.enabled = state;
}

export function getLocalAudioState() {
  const ms0 = localStream.getAudioTracks()[0];
  return ms0.enabled;
}

// Initializes the media stream and sets the video element
export async function initializeMediaStream() {
  videoEle = document.querySelector("#videoPlayer");
  if (!videoEle) {
    return alert("Unable to find video element");
  }
  let mediaConstraints = { video: false, audio: false };

  // Try Video device availability
  const [hasVideo, hasAudio] = await Promise.all([
    testForVideo(),
    testForAudio(),
  ]);
  if (hasVideo) {
    mediaConstraints.video = true;
  }
  // Try Audio device availability
  if (hasAudio) {
    mediaConstraints.audio = true;
  }
  // Alert the user if neither type of media input is available
  if (!(hasAudio || hasVideo)) {
    alert(MediaErrorMessages.NoNothing);
    return;
  }

  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia(
      mediaConstraints
    );
    localStream = mediaStream;
    videoEle.srcObject = mediaStream;
  } catch (error) {
    console.warn(error);
  }
}

export function destroyMediaStream() {
  videoEle = document.querySelector("#videoPlayer");
  videoEle.pause();
  videoEle.srcObject = null;
}
