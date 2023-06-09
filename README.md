# 3D-snowdome-visualizer

### 概要 (Overview)

**このプロジェクトは音楽に合わせて動く3Dヴィジュアライザです。**

基本操作は音楽の再生停止とカメラの視点移動だけで楽しむことが出来ます。操作方法に関しては後述しています。

### ファイル (Files)
**ex.html**

3Dヴィジュアライザを表示させるHTMLファイルです。

**ex.js**

3DCGと音楽の動きを制御しているjavascriptファイルです。

音楽はSongle Widget API、CGはThree.jsを利用しています。

[Songle Widget API](http://widget.songle.jp/)

[Three.js](https://threejs.org/)

**three.min.js**

Three.jsを利用できるミニファイされたファイルです。Three.jsのホームページからもダウンロード可能です。

**TrackballControll.js**

Three.jsのカメラの視点移動をするためのファイルです。こちらもThree.jsのホームページからダウンロード可能です。

### 使い方 (Usage)

静的ファイルのみで構成されているので、ex.htmlを適当なブラウザアプリで開いて頂ければ勝手にコンテンツは始まります。

**再生＆停止**

Songle Widget APIによるYouTubeの画面のすぐ下にある再生停止ボタンをクリックすれば大丈夫です。

自動再生はオンになっているので、再生ボタンを押さなくても再生はされます。もし再生されなければ再生ボタンを手動で押してください。

**カメラの視点移動**

・スクロール：カメラをズームさせる。

・左クリックしながらポインターを移動：カメラの角度を変える。

・右クリックしながらポインターを移動：カメラの位置を変える。

以上の3操作は3DCG内にポインターを移動させてから行ってください。

### ライセンス (License)

ご自由に利用くださいませ。
