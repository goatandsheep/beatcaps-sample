# Beatcaps Sample

This is a sample way to use Beatcaps for imagining music

Demo Video BeatCaps: https://www.youtube.com/watch?v=HnI-0QQ83-c

Demo Video Hapticast: https://www.youtube.com/watch?v=iGXXlaUfa8w

Marketing site: https://www.beatcaps.io/

Closed captions listener: you can copy and paste it from here: https://github.com/goatandsheep/closed-captions-listener or install it from NPM here: https://www.npmjs.com/package/caption-sync

I'm live updating this README during this competition.

Some example effects I've created:

* Video shake: https://www.npmjs.com/package/dom-jitter (docs WIP) 
* Colour randomizer: https://www.npmjs.com/package/rainbow-paint ([docs](https://github.com/goatandsheep/color-randomizer))
* Vibrate toggle: https://npmjs.com/package/piez ([docs](https://github.com/goatandsheep/vibrate-toggle))

Hardware component:

* [How to use gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator/pulse) to connect from browser virtual gamepad
* [How to use ViGEm](https://github.com/ViGEm/ViGEmClient)
* [Hapticast](https://github.com/goatandsheep/hapticast): example using ViGEm

haptics in browser -> gamepad API -> ViGEm (convert signal  for haptic pulse to device actuator) -> device

## Testing

If you're trying to test locally with static instance (i.e. not through a hot reloading server) you'll need to do something funky or risk that browsers think local closed captions files are insecure.

1. Run the following command in the root folder of this project:

```shell
npx http-server
```

2. Open server [on port 80](http://localhost:8080)

## Misc

Want a link to the backend? Reach out for private alpha.
