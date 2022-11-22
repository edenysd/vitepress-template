---
title: Estamos haciendo una prueba
lang: es-ES
layout: doc
---

# Hola

Esto es una prueba

## Mira como indexa automatico

### Mira como indexa automatico hijo

Solo funciona hasta nivel H3 sin contar H1 revisa propiedad `outline` y `outlineTitle`
a partir de esta plantilla puedes ir haciendo lo que quieras, más info [acá](https://vitepress.vuejs.org/guide/markdown)

## Unos utiles

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Interesante

```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code focus]
    };
  },
};
```

```ts
export default {
  data() {
    return {
      msg: "Error", // [!code error]
      msg: "Warning", // [!code warning]
    };
  },
};
```

```rs
let mut a = Vector::new(); // [!code --]
let b = &a; // [!code ++]
```

> El Editor soporta varios lenguajes, creo que tiene varios temas para cambiar pero no creo que haga falta para snippets
