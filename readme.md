# 环境

    mac

    安装 emscripten 官方文档

# 编译

    开发模式
    emcc math.c

    生产模式
    emcc -O3 -s WASM=1 -s SIDE_MODULE=1  hello.c -o hello.wasm
    emcc -O3 -s WASM=1 -s SIDE_MODULE=1  math.c -o math.wasm

# 运行

    开发模式预览
    node ./src/a.out.js

# 遗留

    暂时未实现 rust demo，可能需要先配置好，rust开发环境
