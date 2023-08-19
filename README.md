# CNSeattle.github.io

A site for showcasing the best student submissions of Code Ninjas Seattle.

Viewable at [showcase.cnseattle.co](https://showcase.cnseattle.co).

# Setup
Copy the template or a page you like and tweak as you see fit. Recommendations:
- Add embeds where applicable
  - great for MakeCode projects, 3D models, etc
  - MakeCode has built-in embedding support, when sharing a project you can generate an HTML embed
  - 3D models can be done using [ModelViewer](https://modelviewer.dev/editor/)
- If you can't embed, use preview images. Much easier, though a bit more boring
  - You can use [BulkImageCrop](https://bulkimagecrop.com/) to crop all images to the same aspect ratio at once. Makes the showcase grid look much nicer

 # How to 3D model embed
 You need to export their model as OBJ, as this includes the texture data. 
 
 Next, convert the model to GLTF. This can be done using [obj2gltf](https://github.com/CesiumGS/obj2gltf) and running the command "obj2gltf -i model.obj". This converts the OBJ model and MTL texture into one, combined GLTF file. 

Drag your new GLTF file into [ModelViewer](https://modelviewer.dev/editor/), tweak the settings as you see fit, and you'll have HTML code to embed. Choose "Download Scene", and the website will download all files you need for the next step.

You need to include the embed, the scripts it requires at the top of the page, the WebP preview image, and the CSS file. You can see an example of this correctly configured in the 2023 Camp Week 6 3D Modeling page. It's a little finicky, make sure you match the same order of listing the CSS file, script, and embed that I did. 

May be easiest to copy the working page and change the model references.
