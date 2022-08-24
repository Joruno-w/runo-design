import { App } from "vue";
import MyButton from "./button";

// 导出单独组件
export { MyButton };

// 编写一个插件，实现一个install方法

console.log('MyButton',MyButton.name)

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
  },
};