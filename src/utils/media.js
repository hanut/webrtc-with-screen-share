export const mediaStreamConstraints = {
  video: true,
};

// Local stream that will be reproduced on the video.
export let localStream;
// Video Element to play on
export let videoEle;

// Handles success by adding the MediaStream to the video element.
export function setLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  videoEle.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
export function handleLocalMediaStreamError(error) {
  console.log("navigator.getUserMedia error: ", error);
}

// Initializes the media stream and sets the video element
export async function initializeMediaStream(videoElement) {
  videoEle = videoElement;
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia(
      mediaStreamConstraints
    );
    setLocalMediaStream(mediaStream);
  } catch (error) {
    handleLocalMediaStreamError(error);
  }
}
