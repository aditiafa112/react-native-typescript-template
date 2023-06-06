# React Native Typescript Template

project build with [react native cli](https://reactnative.dev/docs/environment-setup) 

## Features
This `starter-template` is packed with:
- React Native 0.71.8
- React 18.2.0
- Typescript
- Nativewind - Styling like using tailwind in react native.
- Path Alias - ***Coming Soon***
- Eslint - Find and fix problems in your code.
- Pre build - ***Component*** was included styled by nativewind.
- Pre-built - ***Utilities*** to handle common things.
- Pre-built - ***Hooks*** to handle common things in react.
- Minimal dependencies & full of customization.
- Jest - Unit test.
- React Navigation - For move between screen in apps using `Stack` and `Bottom-Tab`.
- Date-fns - Lightweigh date package.

## Getting Started

First install package :
```bash
npm install
# or
yarn
```

Start Metro bundler :
```bash
npm run start
#or
yarn start
```

then pres ` i ` for run ios simulator or pres ` a ` for run android simulator


## Specific Emulator
For use ` specific ` version emulator android open `new terminal`

#### IOS
check simulator ios do you have on terminal:

```bash  
xcrun simctl list devices
```

then run by name

```bash
npm run ios --simulator='iPhone 14 Pro (16.0)'
```

### Android
```bash  
simulator emulator -list-avds
```

then run

```bash
npm run ios --simulator='emulator name'
```

### Environtment
by default provide `.env.template` for development and `.env.prod` for release version

make duplicate from `.env.*.template` to `.env.*` then fill with your secret 

if adding new varible inside `.env` don't forget adding also in `./config/.env.d.ts`.
