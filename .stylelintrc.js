module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines', 'stylelint-config-rational-order'], // 按照规则对CSS属性进行排序
  plugins: ['stylelint-scss'],
  rules: {
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],     // 允许按类型限定属性选择器
      },
    ],
    'max-nesting-depth': 3,        // 允许的最大嵌套深度为 3
    'order/properties-alphabetical-order': null,  // 屏蔽属性按字母顺序检查
    'selector-class-pattern': null,               // 屏蔽类选择器的检查，以确保使用字符 __
    'selector-max-compound-selectors': 5,        // 允许的最大复合选择器为 5
    'font-family-no-missing-generic-family-keyword': null,  // 屏蔽没有申明通用字体
  },
};
