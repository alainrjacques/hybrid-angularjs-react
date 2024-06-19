import { Routes } from "@/routes/type";

function camelToKebabCaseTemplate(str: string) {
  const templateName = str.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
  return `<${templateName} />`;
}

export function mapRoutesToAngularjs(
  $routeProvider: any,
  routes: Array<Routes>
) {
  const recordedRoutes: string[] = [];

  routes.forEach((route) => {
    if (!route.angularjsOptions) return;

    const routeName = route.angularjsOptions!.name;
    if (
      route.angularjsOptions.duplicateName !== true &&
      recordedRoutes.some((r) => r === routeName)
    ) {
      throw new Error("Cannot have duplicate Angularjs name " + routeName);
    }

    recordedRoutes.push(routeName);

    console.log(
      "TEST",
      route.path + camelToKebabCaseTemplate(route.angularjsOptions.name)
    );
    $routeProvider.when(route.path, {
      title: route.searchName,
      template: camelToKebabCaseTemplate(route.angularjsOptions.name),
      reloadOnSearch: false,
      isReact: true,
    });
  });
}
