#Week 6 Project
Art done by my friend who wishes to stay anonymous.
Click the donation box to donate to the Hakurei Shrine to help Reimu keep her sacred shrine clean and pay for maintenance.

    🎯 Implement the useState hook. #DONE
    🎯 Use useEffect effectively. #DONE
    🎯 Return JSX from a source other than App.jsx, for example, by using components. #DONE
    🎯 Apply setInterval to execute periodic tasks within the application. #DONE
    🎯 Use the .map() function to render lists of items in the application dynamically. #DONE
    🎯 Use logic to manage the purchase and application of upgrade items within the game. #DONE

#Stretch Requirements

    🏹 Use local storage to save and retrieve game data. #DONE
    🏹 Use the Upgrades API to manage upgrades. #DONE IF UPGRADE.JSON COUNTS AS AN "API"
    🏹 Style the application excellently. #DONE


    🎯 What requirements did you achieve?
    I have achieved all requirements including stretch goals.
    🎯 Were there any requirements or goals that you were unable to achieve?
    None.
    🎯 If so, what was it that you found difficult about these tasks?
    At first it was difficult getting used to react as global variables aren't trivial to use unlike in vanilla JS and I struggled a bit trying to get variables passed around the components but once I managed to get child components to callback to their parent or grandparent all the functionality of the app came piling in bit by bit as I have already programmed the logic of a cookie clickeresque game in vanilla JS and once I understood how callbacks between components worked it was trivial to translate the code from vanilla JS to react JS.

Overall once I finally started to get used to react it was a bit enjoyable working on this project, not so much when I was struggling, I also had 1 less day to work on this project which meant I couldn't add some small features I wanted to such as animation, conditional rendering for the menu with extra settings, entire side games to play while playing the main clicking game etc. I tried to use react components to the best of my ability to simply this project as much as possible but I ended up with having lots of functions in the app section of the app as I don't know how I would get it to work by putting the functions in differant components and getting them to all work together.

I have ran into some annoying bugs such as misnaming props which caused problems for an entire hour trying to figure out why the shop is not rendering, as well as problems with getting callbacks to work with grandchildren or further props, prop drilling. As well as "shop-area is null" when I try to dynamically render the size of the shop section grid, but since it somehow automatically updates the grid size to add elements it was ultimately not necessary. Also react hook has been constantly displaying an orange error about save being a dependency and I have no idea why, if I put save in there it comes up with another orange error instead.
