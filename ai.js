const intents = {
      'turnOnLights': {
          pattern: /turn on the (.*) lights/i,
              action: 'smartDevice',
                  data: 'lightsOn'
                    },
                      'turnOffLights': {
                          pattern: /turn off the (.*) lights/i,
                              action: 'smartDevice',
                                  data: 'lightsOff'
                                    }
                                    };

                                    function processInput(input) {
                                      for (const intent in intents) {
                                          if (intents[intent].pattern.test(input)) {
                                                return {
                                                        action: intents[intent].action,
                                                                data: intents[intent].data
                                                                      };
                                                                          }
                                                                            }
                                                                              return {
                                                                                  action: 'unknown',
                                                                                      data: null
                                                                                        };
                                                                                        }

                                                                                        module.exports = { processInput };
}