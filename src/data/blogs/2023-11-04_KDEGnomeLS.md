---
title: Make Plasma locksreen to looks like Gnome
date: 2023-11-04
description: A simple modification to change layout of KDE Plasma lockscreen to looks like Gnome
preview: https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen_preview.jpg?alt=media
tags:
  - Linux
  - KDE Plasma
slug: turn-plasma-lockscreen-to-looks-like-gnome
---

KDE Plasma have been around for a long time with various improvement over the years. There is one component that I still think that could be improved, which is the lockscreen. Even KDE is already beautiful with it's design and blurry effect plus Kvantum theme, I always envy the super-neat design of Gnome desktop. One of the component itself is the lockscreen.

## Let's observe the difference

We can take a look here, how the lockscreen view differ between Gnome and Plasma.

![Gnome Lockscreen - PopOS 22.04](https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen-gnome_lockscreen.gif?alt=media)


![KDE Plasma Lockscreen - Fedora KDE 38-1.6](https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen-kde_lockscreen.gif?alt=media)

As we can see, both have two state inside that lockscreen view, the first state only shows a clock waiting user to give any input to shows the second state that displays active user, password input, and some session action. One thing that I really love from Gnome design here is they centered the clock with darken and blurred wallpaper, giving the user-centric vibes, while on the other hands the Plasma design positioned the clock centered-top, which may be okay if it's on my smartphone size, but in the desktop I prefer the Gnome design.


## Transforming Plasma lockscreen

Now, after observing the difference, let's dive in to customize our Plasma lockscreen. Here are some notes before we dive in.
- We neeed Linux with KDE Plasma Desktop Environment (obviously)
- Just in case, please backup the folders that we will modified here (if you still worry, you can try in VM first)
- I also store the file comparison in a github repository [here](https://github.com/yazidzm010101/kde-plasma-gnomelike-lockscreen)

Next, the key component is the default breeze theme that located in
```
/usr/share/plasma/look-and-feel/org.kde.breeze.desktop/contents
```

There were two files from path above, which are

```
- ./components/WallpaperFader.qml
- ./locsckreen/LockScreenUi.qml
```

All files in that path written in QML, the layouting system for application that built using QT toolkit in KDE Plasma Desktop Enviroment.

## Execution

Honestly, when I first read this directory, I don't actually understand what I do, but after several try and error and some diving process in QML documentation I starting to get the behaviour of this files. My advice is, please backup that folders first before we continue to modify them (Even, as I remember KDE have its fallback lockscreen in case the breeeze theme layout is broken or can't be parsed).

##### LockScreenUi.qml

First, when you scrolled down inside LockScreenUi.qml there one component WallpaperFader inside this file

```qml LockScreenUi.qml
WallpaperFader {
    anchors.fill: parent
    state: lockScreenRoot.uiVisible ? "on" : "off"
    source: wallpaper
    mainStack: mainStack
    footer: footer
    clock: clock
}
```

We can modify this component so it's receive additional property named mainBlock, where the mainBlock will be the parent component that conaitns mainStack and clock component

```qml LockScreenUi.qml
WallpaperFader {
    anchors.fill: parent
    state: lockScreenRoot.uiVisible ? "on" : "off"
    source: wallpaper
    mainStack: mainStack
    mainBlock: mainBlock
    footer: footer
    clock: clock
}
```

Next, scroll again until we find DropShadow component

```qml LockScreenUi.qml
DropShadow {
    id: clockShadow
    anchors.fill: clock
    source: clock
    visible: !softwareRendering
    radius: 6
    samples: 14
    spread: 0.3
    color : "black" // shadows should always be black
    Behavior on opacity {
        OpacityAnimator {
            duration: PlasmaCore.Units.veryLongDuration * 2
            easing.type: Easing.InOutQuad
        }
    }
}
```

To remove the clock shadow (so we can mimick the gnome layout) we can just comment out the visible property like belows

```qml LockScreenUi.qml
DropShadow {
    id: clockShadow
    anchors.fill: clock
    source: clock
    // visible: !softwareRendering
    visible: false
    radius: 6
    samples: 14
    spread: 0.3
    color : "black" // shadows should always be black
    Behavior on opacity {
        OpacityAnimator {
            duration: PlasmaCore.Units.veryLongDuration * 2
            easing.type: Easing.InOutQuad
        }
    }
}
```

In the same file, scroll again until we found Clock component

```qml LockScreenUi.qml
Clock {
    id: clock
    property Item shadow: clockShadow
    visible: y > 0
    anchors.horizontalCenter: parent.horizontalCenter
    y: (mainBlock.userList.y + mainStack.y)/2 - height/2
    Layout.alignment: Qt.AlignBaseline
}
```

Then, we can comment out the y property (position of the clock), because we want to make it position animated between idle state and active state

```qml LockScreenUi.qml
 Clock {
    id: clock
    property Item shadow: clockShadow
    visible: y > 0
    anchors.horizontalCenter: parent.horizontalCenter
    // y: (mainBlock.userList.y + mainStack.y)/2 - height/2
    Layout.alignment: Qt.AlignBaseline
}
```



##### WallpaperFader.qml

Then, jump in to WallpaperFader.qml, that will control the lockscreen ui between two state (idle and active state), scroll down until we find Item with id wallpaperFader

```qml WallpaperFader.qml
Item {
    id: wallpaperFader
    property Item clock
    property Item mainStack
    property Item footer
    // some big script below here
}
```

Give that item new property called mainBlock so we can pass some relevant information to be used from lockscreen ui

```qml WallpaperFader.qml
Item {
    id: wallpaperFader
    property Item clock
    property Item mainStack
    property Item mainBlock
    property Item footer
    // some big script below here
}
```

Next, find the states definition here

```qml WallpaperFader.qml
states: [
    State {
        name: "on"
        PropertyChanges {
            target: mainStack
            opacity: 1
        }
        PropertyChanges {
            target: footer
            opacity: 1
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 1
        }
        PropertyChanges {
            target: clock.shadow
            opacity: 0
        }
        PropertyChanges {
            target: clock
            opacity: 1
        }
    },
    // .
    // .
    // .
    // .
    // below this line should be a snipped with name "off"
]
```

Now, we can changes the code above like this

```qml WallpaperFader.qml
states: [
    State {
        name: "on"
        PropertyChanges {
            target: mainStack
            opacity: 1
        }
        PropertyChanges {
            target: footer
            opacity: 1
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 1
        }
        // PropertyChanges {
        //     target: clock.shadow
        //     opacity: 0
        // }
        PropertyChanges {
            target: clock
            opacity: 0
        }
        PropertyChanges {
            target: clock
            y: ((mainBlock.height)/2 - height) - 200
        }
        PropertyChanges {
            target: clock
            scale: 0.5
        }
    },
    // .
    // .
    // .
    // .
    // di bawah ini ada potongan state dengan name "off" harusnya
]
```

With that changes, it actually gives us this behaviour:
- State "on" is when the lockscreen receive interaction from user
- The shadow from the clock is intentionally commented out, because we want to make it like Gnome that don't have any shadow
- Now, if the state of the lockscreen is "on", we make the opacity the clock from 0, and scale it down to 0.5 from the actual size, giving it a fade-zoom-out animation.
- The y position was set up by using from the parent height divided by two substracted by the height of its clock and substracted again 200 unit (so it centered from monitor but kind of elevated a bit to the top)

Now, we have to changes the "off" state, here is the original version

```qml WallpaperFader.qml
states: [
    // .
    // .
    // .
    // .
    // di atas ini ada potongan state dengan name "on" harusnya

    State {
        name: "off"
        PropertyChanges {
            target: mainStack
            opacity: 0
        }
        PropertyChanges {
            target: footer
            opacity: 0
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 0
        }
        PropertyChanges {
            target: clock.shadow
            opacity: wallpaperFader.alwaysShowClock ? 1 : 0
        }
        PropertyChanges {
            target: clock
            opacity: wallpaperFader.alwaysShowClock ? 1 : 0
        }
    }
]
```

Now, this is the modified versoin

```qml WallpaperFader.qml
states: [
    // .
    // .
    // .
    // .
    // above should be the snippet of the "on" state

    State {
        name: "off"
        PropertyChanges {
            target: mainStack
            opacity: 0
        }
        PropertyChanges {
            target: footer
            opacity: 0
        }
        PropertyChanges {
            target: wallpaperFader
            factor: 1
        }
        // PropertyChanges {
        //     target: clock.shadow
        //     opacity: wallpaperFader.alwaysShowClock ? 1 : 0
        // }
        PropertyChanges {
            target: clock
            opacity: 1
        }
        PropertyChanges {
            target: clock
            y: (mainBlock.height / 2) - height
        }
        PropertyChanges {
            target: mainBlock
            y: 200
        }
        PropertyChanges {
            target: mainBlock
            scale: 0.5
        }
    }
]
```

And after that changes, it should give us this behaviour:

- State "off" means the condition when lockscreen is first-time shown and don't receive any interaction from the user.
- In that state, the clock of the shadow also removed (same as the "on" state)
- The opacity of the clock set to 1, giving its a full opacity
- Now, the y clock position is set using the half of its mainBlock (parent) minus the clock height, it should make the clock centered horizontally.
- And for the mainBlock itself:
    - The position set to 200, so it was below the clock a bit
    - We scaled down the size to 0.5
    - And the opacity was set to 0
    - This should gives it's the animation like the clock when the state is "on", but reversed.

Last, but not least, still in the same file , we have to change some script to handle the transition here

```qml WallpaperFader.qml
transitions: [
    Transition {
        from: "off"
        to: "on"
        //Note: can't use animators as they don't play well with parallelanimations
        NumberAnimation {
            targets: [mainStack, footer, clock]
            property: "opacity"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    },
    Transition {
        from: "on"
        to: "off"
        NumberAnimation {
            targets: [mainStack, footer, clock]
            property: "opacity"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    }
]
```

Now, after the modified version

```qml WallpaperFader.qml
transitions: [
    Transition {
        from: "off"
        to: "on"
        //Note: can't use animators as they don't play well with parallelanimations
        NumberAnimation {
            targets: [mainStack, footer, clock, mainBlock]
            properties: "opacity,y,scale"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    },
    Transition {
        from: "on"
        to: "off"
        NumberAnimation {
            targets: [mainStack, footer, clock, mainBlock]
            properties: "opacity,y,scale"
            duration: PlasmaCore.Units.veryLongDuration
            easing.type: Easing.InOutQuad
        }
    }
]
```

In this part, we tell the layout to give the transition to handle multiple property, not just single property which are the opacity, scale, and y position.

## Final Result

![KDE Plasma Lockscreen Modified - Fedora KDE 38-1.6](https://firebasestorage.googleapis.com/v0/b/mujadid-corner.appspot.com/o/storyboard_images%2Fcustomize_kde_locskcreen-kde_lockscreen_modified.gif?alt=media)

And, that's it guys, how we can mimick Gnome lockscreen into KDE Plasma. Have a nice day 😏!
