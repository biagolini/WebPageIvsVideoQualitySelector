// Function to setup the video player with the stream URL provided
function setupPlayer() {
  var streamURL = document.getElementById('stream-url').value
  if (!streamURL) {
    alert('Please enter a valid stream URL.')
    return
  }

  // Register Amazon IVS as playback technology for Video.js
  registerIVSTech(videojs)

  // Initialize player with the Amazon IVS tech
  var player = videojs(
    'amazon-ivs-videojs',
    {
      techOrder: ['AmazonIVS']
    },
    function () {
      console.log('Player is ready to use!')
      // Set the source and play
      this.src(streamURL)
    }
  )

  // Register and enable the IVS Quality Plugin
  registerIVSQualityPlugin(videojs)
  player.enableIVSQualityPlugin()
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed')
})
