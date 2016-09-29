#parse指令

使用#parse指令可以包括在其他模板模板文件这可用于插入可重复使用的内容(如标准头部、版权声明等)为多个模板文件。

的语法#parse指令是：

#parse("<template_name.extension>")

例如：#parse("ActionScript File Header.as")。

该模板可参考这样的其它模板，显示在包括选项卡文件和代码模板 settings page.