# تبدیل اعداد به حروف فارسی


# install

```javascript
> npm install --save v-nfa
```

```javascript
> yarn add v-nfa
```

## config
 1 ) create file plugin/v-nfa.js 

```javascript
 import Vue from 'vue'
 import nfa from 'v-nfa'

 Vue.use(nfa);
 
```

2 ) import To main.js

```javascript
    import Vue from 'vue'
    import App from './App.vue'
    import './plugin/v-nfa'
        
    new Vue({
      el: '#app',
      render: h => h(App),
    }); 
```


## use
````javascript
    <template>
        <p>{{ $nfa.convert(1000000) }}</p> // بک میلیون تومان
    </template>
    
    // OR
    
    <script>
        export default {
            mounted() {
                this.$nfa.convert(1000000); // بک میلیون تومان
            }
        }
    </script>
    
````





