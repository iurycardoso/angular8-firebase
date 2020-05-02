'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">requisicoes-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8e219802bbce85cfed4aec320a1e66fd"' : 'data-target="#xs-components-links-module-AppModule-8e219802bbce85cfed4aec320a1e66fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8e219802bbce85cfed4aec320a1e66fd"' :
                                            'id="xs-components-links-module-AppModule-8e219802bbce85cfed4aec320a1e66fd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComumModule.html" data-type="entity-link">ComumModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DepartamentoModule.html" data-type="entity-link">DepartamentoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DepartamentoModule-c28139ebd2c62ed1496422a76a89cb46"' : 'data-target="#xs-components-links-module-DepartamentoModule-c28139ebd2c62ed1496422a76a89cb46"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DepartamentoModule-c28139ebd2c62ed1496422a76a89cb46"' :
                                            'id="xs-components-links-module-DepartamentoModule-c28139ebd2c62ed1496422a76a89cb46"' }>
                                            <li class="link">
                                                <a href="components/DepartamentoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DepartamentoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DepartamentoRoutingModule.html" data-type="entity-link">DepartamentoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FuncionarioModule.html" data-type="entity-link">FuncionarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' : 'data-target="#xs-components-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' :
                                            'id="xs-components-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' }>
                                            <li class="link">
                                                <a href="components/FuncionarioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FuncionarioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' : 'data-target="#xs-pipes-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' :
                                            'id="xs-pipes-links-module-FuncionarioModule-5ce8f6f476c3088f3395b69f86250a35"' }>
                                            <li class="link">
                                                <a href="pipes/FilterDepartamentoPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterDepartamentoPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FuncionarioRoutingModule.html" data-type="entity-link">FuncionarioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PainelModule.html" data-type="entity-link">PainelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PainelModule-00146c45a7df47669977733069927fd9"' : 'data-target="#xs-components-links-module-PainelModule-00146c45a7df47669977733069927fd9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PainelModule-00146c45a7df47669977733069927fd9"' :
                                            'id="xs-components-links-module-PainelModule-00146c45a7df47669977733069927fd9"' }>
                                            <li class="link">
                                                <a href="components/PainelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PainelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PainelRoutingModule.html" data-type="entity-link">PainelRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrimeNGModule.html" data-type="entity-link">PrimeNGModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Departamento.html" data-type="entity-link">Departamento</a>
                            </li>
                            <li class="link">
                                <a href="classes/Funcionario.html" data-type="entity-link">Funcionario</a>
                            </li>
                            <li class="link">
                                <a href="classes/Model.html" data-type="entity-link">Model</a>
                            </li>
                            <li class="link">
                                <a href="classes/Movimentacao.html" data-type="entity-link">Movimentacao</a>
                            </li>
                            <li class="link">
                                <a href="classes/Requisicao.html" data-type="entity-link">Requisicao</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceFirebase.html" data-type="entity-link">ServiceFirebase</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DepartamentoService.html" data-type="entity-link">DepartamentoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FuncionarioService.html" data-type="entity-link">FuncionarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequisicaoService.html" data-type="entity-link">RequisicaoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthguardService.html" data-type="entity-link">AuthguardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICrud.html" data-type="entity-link">ICrud</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});