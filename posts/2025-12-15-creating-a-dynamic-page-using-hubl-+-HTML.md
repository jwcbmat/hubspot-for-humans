# TemplateType & Props (Definições iniciais de arquivo HubL + HTML)

Tecnicamente é chamada de **anotações do template**. É a parte usada para definir como a página vai ser setada no "Página do Site", Modelo, Blog, etc.

> **Atenção:** Se errar ou não setar, dependendo de onde você precisa da página, o HubSpot pode acabar não apresentando o conteúdo gerado para você (desenvolvedor) ou seu time de marketing/gestão.

## Props e Definições

### [templateType - (Identidade da página)](https://developers.hubspot.com/docs/cms/start-building/building-blocks/templates/overview#template-types)
Uma propriedade **obrigatória**. Define onde esse template vai aparecer dentro dos painéis do HubSpot.

* **[`templateType: page`](https://developers.hubspot.com/docs/cms/start-building/building-blocks/templates/overview#page)**
    * Sendo o mais comum, serve para usar como uma página web em uma *landing page* e *website*.
    * Se setado, aparece em: `Menu > Conteúdo > Página do Site` (usado na seleção de template).

* **[`templateType: blog`](https://developers.hubspot.com/docs/cms/start-building/building-blocks/templates/overview#blog)**
    * Usado em templates para blog (tanto quanto página de listagem de conteúdo, quanto para detalhe de post de blog individual).
    * Aparece em: `Configurações > Conteúdo > Blog` (na seleção de modelo de blog).

* **[`templateType: global_partial`](https://developers.hubspot.com/docs/cms/start-building/building-blocks/templates/overview#global-partial)**
    * Para cabeçalhos (*header*) e rodapés (*footer*). São comumente usados pois conseguem ser acessados e repetidos em qualquer parte do site.
