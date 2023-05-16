function App(){
   let name="não registrado"
   const app_prototype={
      getName:function(){
         return this.name
      },
      setName:function(new_value){
         this.name=new_value
      }
   }
   let app=Object.create(app_prototype)
   return app
}
export {App}