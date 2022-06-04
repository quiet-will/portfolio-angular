import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./components/about/about.component";
import { BlogComponent } from "./components/blog/blog.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperiencesComponent } from "./components/experiences/experiences.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

const routes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'formacao', component: EducationComponent},
    {path: 'experiencias', component: ExperiencesComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}