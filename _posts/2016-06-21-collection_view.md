---
layout: post
categories: [javascript, backbone, node.js]
title: Collection View
summary: Collection View
author: UzmaDesai
profile: https://avatars2.githubusercontent.com/u/17782218?v=3&amp;s=460
image: cv.png
user_image: Uzma.jpg
---

**COLLECTION VIEWS**

Collection views  provided in swift programming language are helpful for easily creating grid like layouts. Collection views allows content to be displayed using arbitrary layouts.

Collection view employs a view recycling program i.e. as view moves off screen they are removed from view and placed in reuse queue. As new content is scrolled onscreen  views are removed from queue and repurposed with new content.

**Basic components:**

- UICollectionView – the main view in which the content is displayed. It also has an in built scrolling property, provides both horizontal and vertical scrolling.
- UICollectionViewCell – these cells make up the content of the view and are added as subviews to the collection view. Cells can either be created programmatically or inside interface builder.

Supplementary views such as labels section headers and footers can also be added to the collection view.
