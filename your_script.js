// Создание сцены
var scene = new THREE.Scene();

// Создание камеры
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 6;

// Рендерер
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(400, 400);
renderer.setClearColor(0xf0f0f0);
document.body.appendChild(renderer.domElement);

// Добавление света
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Переменная для управления вращением
var rotate = false;

// Загрузка текстуры
var textureLoader = new THREE.TextureLoader();
textureLoader.load('fotboll_bg.jpg', function(texture) {
    // Создание материала с текстурой
    var material = new THREE.MeshPhongMaterial({ map: texture });

    // Создание модели футбольного мяча
    var geometry = new THREE.SphereGeometry(1, 32, 32);
    var soccerBall = new THREE.Mesh(geometry, material);
    soccerBall.scale.set(2.5, 2.5, 2.5); // Увеличиваем мяч
    scene.add(soccerBall);

    // Анимационный цикл
    function animate() {
        requestAnimationFrame(animate);

        if (rotate) {
            soccerBall.rotation.y += 0.05; // Вращение мяча, если разрешено
        }

        renderer.render(scene, camera);
    }

    animate(); // Запуск анимации
});

// Функция для управления вращением
function toggleRotation() {
    rotate = !rotate; // Переключение состояния вращения
}

// Добавление обработчика событий на кнопку
document.getElementById('startRotation').addEventListener('click', toggleRotation);
