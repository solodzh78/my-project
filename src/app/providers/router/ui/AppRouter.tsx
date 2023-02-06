import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

export const AppRouter = () => {

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {routeConfig.map(({path, element}) => (
          <Route key={path} {...{path, element}} />
        ))}
      </Routes>
    </Suspense>
  )

}