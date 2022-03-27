### Troubleshooting

#### Wii

##### Brawl is loading instead of Project+
If Brawl is loading when you are trying to launch Project+, perform these steps until Project+ is working:
* Ensure inside Dolphin you are launching the .elf file included in the download; double-click on "Project+ Netplay Launcher.elf" where it is listed under title
* Ensure in Config → Wii that "Insert SD" is enabled
* Check MD5 on the Brawl ISO. Type ".md5" in this server's support channel for more info
* In Config → Paths, check that the SD card path is set
* Open the Netplay window by selecting the launcher and going to "Start" then "Netplay" and host a lobby, from the top-right corner click "MD5 check..." and from the dropdown menu select "SD Card," the hash should be ab2ced024fc33257add856ea9c3dc550
* If these steps fail, move the Project+ files to a different directory, such as the Desktop or the Documents folder, and repeat the steps above if it continues loading Brawl

#### Dolphin (PC, Windows, Mac, Linux)

##### I have a black screen
Perform these steps until your game starts working:
* Check that Brawl is set as the default ISO
* Confirm Brawl is a North American NTSC copy in the ISO format, not the nkit format
* Enable and setup your controller in first port
* Ensure in Config → Wii that "Insert SD" is enabled
* In Config → Paths go to the SD card path, select the `...` to browse for your `sd.raw` file and reselect it
* Check MD5 on the Brawl ISO, type ".md5" in this server's support channels for more information
* Run P+ Dolphin as Admin
* Make sure the extracted folder containing Dolphin is not placed in a protected directory; try moving Dolphin to your Desktop
* Try setting the buffer much higher at start, then lower it when the game loads

##### I get error messages about desyncing when using Netplay
First ensure that Project+ works offline for each player individually.<br/>
Perform these steps in order if the game is functioning for both players individually, but desyncing over Netplay.  After identifying the issue, the faulty component can be replaced:
* Use a third party to identify which installation (or both) is faulty. If one of the players is not desyncing with a third party, they can skip these steps.
* Check MD5 on the Brawl ISO .MD5 for more info
* Check MD5 on the virtual SD card .sdMD5 for more info
* Re-extract the Dolphin build to solve issues with the Dolphin save.

##### Dolphin.exe - System Error "The code execution cannot proceed because VCRUNTIME140_1.dll was not found. Reinstalling the program may fix this problem."
If you see this message, install this: [https://aka.ms/vs/16/release/vc_redist.x64.exe]