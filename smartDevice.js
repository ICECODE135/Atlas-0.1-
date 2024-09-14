function handleAction(data) {
      if (data === 'lightsOn') {
          console.log('Turning on the lights');
            } else if (data === 'lightsOff') {
                console.log('Turning off the lights');
                  }
                  }

                  module.exports = { handleAction };
}