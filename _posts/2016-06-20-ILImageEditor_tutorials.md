---
layout: post
categories: [javascript, backbone, node.js]
title: ILImageEditor tutorial
summary: ILImageEditor
author: ill-Logical
profile: https://github.com/ill-Logical
image: ILImageEditor_Blog.png
user_image: Muqtadir.jpeg
---

**ILImageEditor**

While I was working on an image editing **[application](https://appsto.re/in/mEN5cb.i)** I came across some very basic operations that every application performs on the image being edited. The code wasn't difficult to write for it, but "Hey! who wants to do all that work". So, I decide to write a simple framework that performs these operations for the developer.

**[ILImageEditor](https://github.com/ill-Logical/ILImageEditor)** is a simple image editor that performs most basic yet widely performed operations on an image like rotation, mirroring of images, resizing and cropping.

Ok, so to start the tutorial we'll just install the pod by adding the following line to our Podfile.

````````
platform :ios, '8.0'

target 'MyProjectName' do
  use_frameworks!
  pod 'ILImageEditor'

end
````````
If you haven't initialised the pod yet then just type

```
pod init
```
and install the pod.

```
pod install
```

Now we're all set to use the newly installed pod in our project.

Let's start by import the framework in our class.

```
import ILImageEditor
```

In the class we initialise the instance of the [**ILImageEditor**](https://github.com/ill-Logical/ILImageEditor).

```
var editor = ILImageEditor()
```

Now, we can use this singleton to access the editing options provided by the installed framework.

**Features**

- Fix orientation.
- Rotate an image clockwise or anti-clockwise.
- Mirror an image along horizontal or vertical axis.
- Compress an image.
- Resize an image to make it smaller.
- Crop an image.

**First** let's start by fixing the rotated image orientation that iOS devices usually have upon exporting or uploading the image.

```
let imageToFix = UIImage(named: "Sample")
let fixedImage = editor.fixImageOrientation(imageToFix)
```

**Second**, we can start performing operations on an image.

```
let image = UIImage(named: "Sample")
let finishedImage = editor.editImageWithOptions(image, withOptions: .rotateClockWise)
```

The above code takes an image and image operation as a parameter. So, as we can see we are asking [**ILImageEditor**](https://github.com/ill-Logical/ILImageEditor) to rotate the image in a clock wise direction, and return the new image. The return image is new image generated with new orientation and not merely rotated and returned. It's ready for export/upload.

Following are other options for *"withOptions"* that the above method provides functionality of are:

```
.rotateClockWise
.rotateAntiClockWise
.flipHorizontal
.flipVertical
```

And I hope the options are self explanatory.

**Third**, compress and resize an image to make it smaller in size or quality or both.

```
let image = UIImage(named: "Sample")
let finishedImage = editor.compressImageToSize(image, withSize: .half, compressionQualtity: 1.0)
```

Following are other options for *"withSize"* that resize the image to a smaller size with stated ratio:

```
.half
.oneThird
.oneFourth
.oneFifth
```

**Fourth**, crop an image to some rect.

```
let rect = CGRect(x: 0.0, y: 0.0, width: 50.0, height: 100.0)
let croppedImage = cropAnImageToRect(image, rectToCrop: rect)
```

The above function crops the image that lie in the provided rect and returns the cropped image.

**Conclusion**

Hope you enjoyed what you read, if have any suggestions or want to request a functionality in the pod then please get in touch with me on Twitter **[@muqtadir_ahmed](https://twitter.com/muqtadir_ahmed)**, or if you find any bugs or crashes please fork my repository at **[Github](https://github.com/ill-Logical/ILImageEditor)** and send raise an issue. 
