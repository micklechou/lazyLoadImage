(function(){
    RegExp.prototype.myExec = function myExec(){
        // 对于exec只有单一返回值进行了处理
        var temp = arguments[0] ||""
        if(!this.global){
          return this.exec(temp)
      }
        var result = []
        var arr = this.exec(temp)
        while(arr){
            result.push(arr[0])
            arr =this. exec(temp)
        }
        return result
      }
      RegExp.prototype.noExec = function noExec(){
        if(this.global){
             if(this.lastIndex ==0){
                this.str = arguments[0]
                return this.exec(arguments[0]) 
             }else if(this.str ==arguments[0]){
                 return this.exec(arguments[0]) 
             }else{
                 var temp = this.exec(this.str)
                while(temp){
                    temp = this.exec(this.str)
                }
                this.str =arguments[0]
                return this.exec(arguments[0])         
                }}
        else{
            return this.exec(arguments[0])
        }
        }
        HTMLElement.prototype.offsettop =function(){
            var num = this.offsetTop
            var temp = this.offsetParent
            while(temp && temp.nodeName !== "BODY"){
                num +=  temp.offsetTop+ temp.clientTop
                temp = temp.offsetParent
            }
            return num
        }
        HTMLElement.prototype.offsetleft =function(){
            var num = this.offsetLeft
            var temp = this.offsetParent
            while(temp && temp.nodeName !== "BODY"){
                num +=  temp.offsetLeft+ temp.clientLeft
                temp = temp.offsetParent
            }
            return num
        }
        HTMLElement.prototype.getCss = function(){
            if(window.getComputedStyle){
               var temp =  window.getComputedStyle(this,null)[arguments[0]]
             if(arguments[0] == "padding" || arguments[0] == "margin"){return temp}
             else if (!isNaN(parseFloat(temp))){
                return parseFloat(temp)
            }else{
                return temp
            }
            }else{
                var temp = this.currentStyle[arguments[0]]
                if(arguments[0] == "padding" || arguments[0] == "margin"){return temp}
                else if (!isNaN(parseFloat(temp))){
                   return parseFloat(temp)
               }else{
                   return temp
               }
            }
        }
        HTMLElement.prototype.setCss = function(){
            for(var key in arguments[0]){
                if(arguments[0].hasOwnProperty(key)){
                    console.log(key,arguments[0][key])
                    this.style[key] = arguments[0][key]
                }
            }
        }
      Object.prototype.mymatch = function mymatch(){
          // 模仿写了个作用不大 直接用match即可
          var temp  = arguments[0]||/^/
          if(!temp.global){
                return temp.exec(this)
          }
          var result = [];
          var arr  = temp.exec(this)
          while(arr){
              result.push(arr[0])
              arr = temp.exec(this)
          }
          return result
      }
      
      String.prototype.myTime =function(){
          let ary = this.match(/\d+/g),
              template = arguments[0]||'{0}年{1}月{2}日 {3}时{4}分{5}秒';
              template = template.replace(/\{(\d+)\}/g,function(){
                  var value =ary[arguments[1]] || '0'
                  value.length<2? "0"+value:null
                  return value
              })
              return template
      }
      String.prototype.myTrim = function myTrim(){
        return this.replace(/^\s+|\s+$/g,"")
      }
      String.prototype.myTrimAll = function myTrim(){
        return this.replace(/\s+/g,"")
      }
      const tools = {
          init:()=>{},
          toJson:(str)=>{
           var obj= {}
           try{
               obj = JSON.parse(str)
           }catch(e){
               obj = eval(`(${str})`)
           }
          },
          toArray:(ary)=>{
              var arr = []
              try{
                  return [].slice.call(ary,0)
              }catch(e){
              for(let i =0;i<ary.length;i++){
                  arr.push(ary[i])
              }
              return arr
              }
          }
      }
       window.tools = tools


})()

