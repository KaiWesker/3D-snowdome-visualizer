window.onload = load_songle; //画面(Window)読み込み完了時のイベントハンドラ

window.onSongleWidgetReady = ready;//songleの準備が出来たらreadyを実行

function load_songle() {//load_songle
    var songleWidgetElement = // SongleWidget要素を作成
        SongleWidgetAPI.createSongleWidgetElement({//songleとして使う要素の設定
            api: "songle-widget-api-example",
            url: "https://www.youtube.com/watch?v=mF5Qq2YheTg", // 楽曲のURLを設定
            songAutoPlay: true // 自動再生を有効にする
        });//songle要素の設定終了
    document.body.appendChild(songleWidgetElement);// 作成したSongle Widget要素をbodyタグ内に追加する
};//load_songle関数の終了

function ready(apiKey, songleWidget) { //ready

    var scene = new THREE.Scene(); //シーンの追加

    //カメラの設定
    var fov = 80;//画角
    var aspect = window.innerWidth / window.innerHeight;//アスペクト比
    var near = 1;//カメラが捉える範囲(近）
    var far = 1000;//カメラが捉える範囲（遠）
    var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);//カメラの生成
    camera.position.set(-20, 22, 33);//カメラの位置

    //オブジェクトの設定
    var sphereGeo = new THREE.SphereGeometry(7, 32, 16); //sphere(雪だるまの身体)の形の設定
    var sphereMat = new THREE.MeshToonMaterial({ color: 0xFFFFFF }); //sphereのメッシュ設定
    var sphere = new THREE.Mesh(sphereGeo, sphereMat); //sphereの生成
    sphere.position.set(0, 0, 0); //sphereの位置を設定
    scene.add(sphere); //sphereをシーンに追加

    var sphere2Geo = new THREE.SphereGeometry(5.5, 32, 16); //sphere2(雪だるまの顔)の形の設定
    var sphere2Mat = new THREE.MeshToonMaterial({ color: 0xFFFFFF }); //sphere2のメッシュ設定
    var sphere2 = new THREE.Mesh(sphere2Geo, sphere2Mat); //sphere2の生成
    sphere2.position.set(0, 10, 0); //sphere2の位置を設定
    scene.add(sphere2); //sphere2をシーンに追加

    var righteyeGeo = new THREE.SphereGeometry(0.5, 32, 16);
    var righteyeMat = new THREE.MeshToonMaterial({ color: 0x000000 });
    var righteye = new THREE.Mesh(righteyeGeo, righteyeMat);
    righteye.position.set(-2, sphere2.position.y * 1.15, sphere2Geo.parameters.radius * Math.sin(2));
    scene.add(righteye);

    var lefteyeGeo = new THREE.SphereGeometry(0.5, 32, 16);
    var lefteyeMat = new THREE.MeshToonMaterial({ color: 0x000000 });
    var lefteye = new THREE.Mesh(lefteyeGeo, lefteyeMat);
    lefteye.position.set(2, sphere2.position.y * 1.1, sphere2Geo.parameters.radius * Math.sin(2));
    scene.add(lefteye);

    var mouthGeo = new THREE.TorusGeometry(5.5, 0.1, 32, 100, Math.PI * 0.3);
    var mouthMat = new THREE.MeshToonMaterial({ color: 0x6B493D });
    var mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.position.set(0, sphere2.position.y + 1.8, 1.75);
    mouth.rotation.set(-10, 0, 0.9);
    scene.add(mouth);

    var carrotGeometry = new THREE.CylinderGeometry(1, 0, 4, 32);
    var carrotMaterial = new THREE.MeshToonMaterial({ color: 0xF47A44 });
    var carrot = new THREE.Mesh(carrotGeometry, carrotMaterial);
    carrot.position.set(0, sphere2.position.y, 5.25);
    carrot.rotation.set(-Math.PI / 2, 0, 0);
    scene.add(carrot);

    var brimGeometry = new THREE.CylinderGeometry(7, 7, 0.25, 20, 32);
    var brimMaterial = new THREE.MeshToonMaterial({ color: 0x302833 });
    var brim = new THREE.Mesh(brimGeometry, brimMaterial);
    brim.position.set(0, sphere2.position.y * 1.35, 0);
    scene.add(brim);

    var hatGeometry = new THREE.CylinderGeometry(4.5, 4.5, 6, 20, 32);
    var hatMaterial = new THREE.MeshToonMaterial({ color: 0x302833 });
    var hat = new THREE.Mesh(hatGeometry, hatMaterial);
    hat.position.set(0, brim.position.y + hatGeometry.parameters.height / 2, 0);
    scene.add(hat);

    var hatbandGeometry = new THREE.CylinderGeometry(4.6, 4.6, 0.75, 20, 32);
    var hatbandMaterial = new THREE.MeshToonMaterial({ color: 0xDD0000 });
    var hatband = new THREE.Mesh(hatbandGeometry, hatbandMaterial);
    hatband.position.set(0, brim.position.y + 1.5, 0);
    scene.add(hatband);

    var lampBarGeo = new THREE.CylinderGeometry(0.5, 1, 40, 20, 32);
    var lampBarMat = new THREE.MeshToonMaterial({ color: 0x2F4F4F });
    var lampBar = new THREE.Mesh(lampBarGeo, lampBarMat);
    lampBar.position.set(-25, 15, 10);
    scene.add(lampBar);
    var lampBar2 = new THREE.Mesh(lampBarGeo, lampBarMat);
    lampBar2.position.set(lampBar.position.x, lampBar.position.y, lampBar.position.z - 40);
    scene.add(lampBar2);

    var lampVertexGeo = new THREE.SphereGeometry(2, 32, 16);
    var lampVertexMat = new THREE.MeshToonMaterial({ color: 0x2F4F4F });
    var lampVertex = new THREE.Mesh(lampVertexGeo, lampVertexMat);
    lampVertex.position.set(lampBar.position.x, lampBar.position.y * 2.2, lampBar.position.z);
    scene.add(lampVertex);
    var lampVertex2 = new THREE.Mesh(lampVertexGeo, lampVertexMat);
    //lampVertex2の位置をlampVertexより40後ろに設定
    lampVertex2.position.set(lampVertex.position.x, lampVertex.position.y, lampVertex.position.z - 40);
    scene.add(lampVertex2);

    var lampSupportGeo = new THREE.TorusGeometry(5, 0.5, 16, 100, Math.PI * 1);
    var lampSupportMat = new THREE.MeshToonMaterial({ color: 0x2F4F4F });
    var lampSupport = new THREE.Mesh(lampSupportGeo, lampSupportMat);
    lampSupport.position.set(lampBar.position.x + lampSupportGeo.parameters.radius, lampBar.position.y * 1.75, lampBar.position.z);
    scene.add(lampSupport);
    var lampSupport2 = new THREE.Mesh(lampSupportGeo, lampSupportMat);
    //lampSupport2の位置をlampSupportより40後ろに設定
    lampSupport2.position.set(lampSupport.position.x, lampSupport.position.y, lampSupport.position.z - 40);
    scene.add(lampSupport2);

    var lampGeo = new THREE.SphereGeometry(2.8, 16, 32);
    var lampMat = new THREE.MeshToonMaterial({ color: 0xFFFF00 });
    var lamp = new THREE.Mesh(lampGeo, lampMat);
    lamp.position.set(lampSupport.position.x + lampSupportGeo.parameters.radius, lampSupport.position.y - 2.5, lampBar.position.z);
    scene.add(lamp);
    var lamp2Geo = new THREE.SphereGeometry(2.8, 16, 32);
    var lamp2Mat = new THREE.MeshToonMaterial({ color: 0xFFFF00 });
    var lamp2 = new THREE.Mesh(lamp2Geo, lamp2Mat);
    //lamp2の位置をlampよりも40後ろに設定
    lamp2.position.set(lamp.position.x, lamp.position.y, lamp.position.z - 40);
    scene.add(lamp2);

    var snowgroup = new THREE.Group();//snowgroupグループの設定
    scene.add(snowgroup);//snowgroupをシーンに追加
    var initY = 25;//雪の高さの初期値
    var numSnow = 300; //生成される雪のマックスの設定
    var num = 0; //雪が生成された個数をカウントする
    var snowFlakeGeo = new THREE.SphereGeometry(0.25, 16, 32);//snowFlake(雪の結晶)の形の設定
    var snowFlakeMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });//snowFlakeのメッシュ設定
    //snowFlakeの生成はまだ

    function snow() { //snow関数(雪を降らせるための関数)
        var snowFlake = new THREE.Mesh(snowFlakeGeo, snowFlakeMat);//snowFlakeの生成

        snowFlake.position.set(Math.random() * 90 - 45, -100, Math.random() * 90 - 45);//snowFlakeの位置をxとzのみランダムで設定
        snowgroup.add(snowFlake);//snowFlakeをsnowGroupに追加
        num++;//雪を1つ生成したので+1する
        if (num < numSnow) {//生成した雪の数がnumSnowの値に達したかどうかを判断するif文
            setTimeout(function () { snow(); }, 100);//条件がTrueだったら0.1秒に一度このsnow関数を実行する
        };//if文の終わり

        function snowFall() {//snowFall関数(雪を降らせるための関数)
            if (snowFlake.position.y > -7) {//雪のy座標が-7より高いかどうかを判断するif文
                snowFlake.position.y = snowFlake.position.y - 0.5;//条件がTrueだったら雪のy座標を-0.5する
            } else {//雪のy座標が-7より低ければ……
                gonnax = Math.random() * 90 - 45;//雪のx座標(予定)をランダムに更新する
                gonnaz = Math.random() * 90 - 45;//雪のz座標(予定)をランダムに更新する
                if (gonnax ** 2 + gonnaz ** 2 < 44 ** 2) {//x・z座標が半径44の円(スノードーム)の内側にあるなら……
                    snowFlake.position.x = gonnax;//x座標の(予定)を実現させる
                    snowFlake.position.z = gonnaz;//z座標の(予定)を実現させる
                    //x・z座標からそこと円の中心との直線距離をbottomを代入
                    bottom = Math.sqrt(snowFlake.position.x ** 2 + snowFlake.position.z ** 2) / 45;
                    //bottomからスノードームの天井の高さから雪が降るようにy座標を設定
                    snowFlake.position.y = initY + Math.sqrt(1 - bottom ** 2) * 45;
                };
            };
            setTimeout(function () { snowFall(); }, 30);//snowFall関数を0.03秒に一度実行する
        };//snowFall関数の終了
        snowFall();//snowFall関数の呼び出し
    };//snow関数の終了
    snow();//snow関数の呼び出し

    var planeGeo = new THREE.CylinderGeometry(49.99, 49.99, 10, 32);
    var planeMat = new THREE.MeshToonMaterial({ color: 0xB0C4DE });
    var plane = new THREE.Mesh(planeGeo, planeMat);
    plane.position.set(0, sphereGeo.parameters.radius - sphereGeo.parameters.radius * 2.4, 0);
    scene.add(plane);

    var upperSnowdomeGeo = new THREE.SphereGeometry(50, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    var upperSnowdomeMat = new THREE.MeshBasicMaterial({ color: 0xEEEEEE });
    var upperSnowdome = new THREE.Mesh(upperSnowdomeGeo, upperSnowdomeMat);
    upperSnowdome.material.transparent = true;
    upperSnowdome.material.opacity = 0.15;
    upperSnowdome.position.set(0, 25, 0);
    scene.add(upperSnowdome);

    var lowerSnowdomeGeo = new THREE.CylinderGeometry(50, 50, 30, 32, 32, true);
    var lowerSnowdomeMat = new THREE.MeshBasicMaterial({ color: 0xEEEEEE });
    var lowerSnowdome = new THREE.Mesh(lowerSnowdomeGeo, lowerSnowdomeMat);
    lowerSnowdome.material.transparent = true;
    lowerSnowdome.material.opacity = 0.15;
    lowerSnowdome.position.set(0, 10, 0);
    scene.add(lowerSnowdome);

    var lowerdomeGeo = new THREE.CylinderGeometry(55, 55, 10, 32, 32);
    var lowerdomeMat = new THREE.MeshToonMaterial({ color: 0x8B4513 });
    lowerdome = new THREE.Mesh(lowerdomeGeo, lowerdomeMat);
    lowerdome.position.set(0, -15, 0);
    scene.add(lowerdome);

    //ライトの設定
    var light = new THREE.PointLight(0xFFFFFF, 0.5);//lightの要素の設定
    light.position.set(lamp.position.x, lamp.position.y - 1, lamp.position.z);//lightの位置の設定
    scene.add(light);//lightをシーンに追加
    var light2 = new THREE.AmbientLight(0xFFFFFF, 0.3);//light2の要素の設定
    scene.add(light2);//light2をシーンに追加(light2はAmbientLinghtのため位置の設定は無し)

    function lighting() {//lighting関数(lightがランダムに途切れる関数)
        //Chorusではなかったら以下を実行
        if (songleWidget.isPlayingChorusSegment != true) {
            var isLightoff = Math.random();//isLightoffをランダムに設定する
            function lightadd() {//lightAdd関数(消えたlightを付けなおす関数)
                lamp.material.color.setHex(0xFFFF00);//lampの色を黄色に更新する
                scene.add(light);//lightをシ－ンに追加する
            };//lightadd関数の終了
            lightadd();//lightadd関数の呼び出し
            function lightoff() {//lightoff関数(lightがランダムに消える関数)の始まり
                if (isLightoff > 0.4) {//isLightoffが0.4より大きいかを判断するif文
                    //条件がTrueであれば0~1000のランダムでlightoffTimeを設定
                    var lightoffTime = Math.floor(Math.random() * 1000);
                    lamp.material.color.setHex(0xEEEEEE);//lampの色を白に更新する
                    scene.remove(light);//lightをシーンから削除する
                    //lightadd関数をlightが消えてからlightoffTime × 0.5秒後に実行する
                    setTimeout(function () { lightadd() }, lightoffTime * 0.5);
                };//lightoffのif文の終了
            };//lightoff関数の終了
            lightoff();//lightoff関数の呼び出し
        };//Chorusのif文の終了
        setTimeout(function () { lighting(); }, 1000);//lighting関数を1秒に一度実行する
    };//lighting関数の終了
    lighting();//lighting関数の呼び出し

    //レンダラーの設定
    var renderer = new THREE.WebGLRenderer();//レンダラーを生成
    renderer.setClearColor(new THREE.Color(0x00002B));//背景色の設定
    renderer.setSize(window.innerWidth, window.innerHeight);//サイズの設定
    document.body.appendChild(renderer.domElement);//レンダラーのDOM要素をbodyの中に追加する
    renderer.render(scene, camera);//レンダラーのレンダリング

    //カメラ操作の設定
    //TrackBallControlsの生成
    var trckblCtrls = new THREE.TrackballControls(camera, renderer.domElement);

    trckblCtrls.rotateSpeed = 1.0;//カメラの回転速度の設定
    trckblCtrls.zoomSpeed = 1.0;//カメラのズーム速度の設定
    trckblCtrls.panSpeed = 1.0;//カメラのパン速度の設定

    var clock = new THREE.Clock();//時間経過を取得するオブジェクト
    clock.start();//時間の計測を開始する

    function animate() {//animate関数(カメラを動かす関数)の開始
        var delta = clock.getDelta();//前回getDelta()が実行されたときからの時間経過を取得する
        trckblCtrls.update(delta);//前回のupdateからのカメラの差分を更新する

        renderer.render(scene, camera);//シーンとカメラのレンダリング
        requestAnimationFrame(animate);//animate関数の実行(2回目以降、1秒間に60回実行する)
    };//animate関数の終了
    animate();//animate関数の呼び出し
};//ready関数の終了