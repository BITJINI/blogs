---
layout: post
categories: [javascript, backbone, node.js]
title: Recycler View
summary: Recycler View
author: Shradha953
profile: https://avatars0.githubusercontent.com/u/18301482?v=3&amp&s=460
image: recycler.jpg
user_image: Shradha.jpg
---

As I am working on Collage of an images, so need to be comfortable with

- RecyclerView

- GridLayoutManager

**RecyclerView: What it is?**

The RecyclerView has been developed with extensibility in mind. It is new ViewGroup that is prepared to render any adapter-based view in an similar way. It is supossed to be the successor of ListView and GridView, and it can be found in the latest support-v7 version, and **[to know more](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html)**.

**GridLayoutManager:**

GridLayoutManager will decide which part of screen the views are to be placed. It must be able to manage scrolling and recycling and to manage the views in different orders then we can use SpanSizeLookup which manages according to the spaces as shown in below code snippet:


```
GridLayoutManager mLayoutManager = new GridLayoutManager(this, 3);
mRecyclerView.setLayoutManager(mLayoutManager);

mLayoutManager.setSpanSizeLookup(new GridLayoutManager.SpanSizeLookup() {
    @Override
    public int getSpanSize(int position) {
	if (position == 0 || position == 6) {
                return 3; // ITEMS AT POSITION 1 AND 6 OCCUPY 2 SPACES
            } else {
                return 1; // OTHER ITEMS OCCUPY ONLY A SINGLE SPACE
            }
        }
    });

```

you can change count of spaces on each position according to your needs. **[To know more](https://developer.android.com/reference/android/support/v7/widget/GridLayoutManager.html)**

If any issues, you can check my github **[repository](https://github.com/Shradha953/RecyclerView)**


