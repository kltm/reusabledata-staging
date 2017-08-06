<span id="anchor"></span>NOTE: CURRENTLY PORTING TO GH.

<span id="anchor-1"></span>A) License is public, discoverable, and standard:

**Rationale: **All data sources should publicly state their terms of use in an easy-to-find and non-ambiguous manner.

-   <span id="anchor-2"></span>A.1) Does the resource have a *single* license?

    -   <span id="anchor-3"></span>Does the resource’s data area itself (if applicable) have anything license?

        -   If yes, take note of where license information is found (is discoverable).
    -   <span id="anchor-4"></span>Does the resource’s data section have anything license-related in the footer, top-level menu, or ‘about’ page?
    -   If yes, note of where license information is found (is discoverable). Does the resource’s homepage have anything license-related in the footer, top-level menu, or ‘about’ page? Please note that while a copyright statement in the footer of the general website may satisfy A.1, there are cases where it may not actually cover the data.

<!-- -->

-   -   If yes, make note of where license information is found (is discoverable).
-   <span id="anchor-5"></span>Decision point:

    -   <span id="anchor-6"></span>Yes, I found a single license: → HALF STAR → A5
    -   **A.1.1)** Conflict: No, I found multiple different licenses: **→ NO STARS**→ A5
    -   **A.1.2)** Missing: No, I could not find license information in a reasonable location (is missing). Note that while technically the contents are now covered by default copyright protections in the US, the ambiguity here will short circuit further evaluation of the license: **→ NO STARS**→ **Only C**
    -   *Note: If you do NOT find a license or terms using above methods, and happen to find a license using other methods (e.g. via GitHub, Google, etc.) DO make a note of where it was found--we may expand the likely locations in the future. At this point, reasonable discoverability is key for the star, but a found license can still be used when looking at other star criteria. Also note, if you find a single license but it is internally inconsistent, this internal inconsistency is evaluated in B, not A.*

<!-- -->

-   <span id="anchor-7"></span>A.2) Does the resource use a standard license?

<!-- -->

-   Yes (standard): **→ add HALF STAR to score from A1**→ **B**

-   No: Custom (a custom or non-standard license, including public domain declarations): **→ NO STARS** → **B**

-   Example list of standard licenses:

    -   Public domain declaration (while maybe technically “standard”, there is ambiguity as to it being globally applicable ([*https://wiki.creativecommons.org/wiki/Public\_domain*](https://wiki.creativecommons.org/wiki/Public_domain))) → No
    -   Any Creative Commons licence (https://creativecommons.org/licenses/) → Yes
    -   Any GNU software or documentation license (https://www.gnu.org/licenses/licenses.html) → Yes, note software license
    -   Any BSD or MIT type licenses → Yes, note software licence
    -   Apache Foundation licenses (e.g. [*https://www.apache.org/licenses/LICENSE-2.0*](https://www.apache.org/licenses/LICENSE-2.0)) → Yes, note software licence
    -   Open Database license ([*http://opendatacommons.org/licenses/odbl/1.0*](http://opendatacommons.org/licenses/odbl/1.0)) → Yes

<span id="anchor-8"></span>B) License requires no further negotiation and its scope is both unambiguous and covers all of the data:

**Rationale: **No further legal consultation should be necessary and no further action should be needed for the non-negotiated use of a data resource.

-   <span id="anchor-9"></span>B.1) Is the license free of any language that explicitly requires negotiation?

    -   Yes: **→ HALF STAR**→ B2

    -   No: **→ NO STARS** → B2

-   <span id="anchor-10"></span>B.2) Is the scoping of the license complete? To determine this, both of these criteria must be met:
    B.2.1. Comprehensive: Does the license apply to all of the data?

    -   -   Example failures include: “Except where noted…” or “Except where prohibited by the original sources” (e.g. ClinVar, EBI, Monarch)

> <span id="anchor-11"></span>B.2.2. Differentiated: If multiple licenses apply, is it possible to obtain a singly-licensed slice?

> In the case that a resource holds multiple kinds of content (software, ontologies, or data) or if portions of its records are made available under different licenses, is it possible to obtain a “clean” copy of all of the work that *can* be redistributed without negotiation?

-   -   -   Example failures would include: “a reasonable portion of the data may be downloaded/redistributed, etc.”
    -   Yes (both B.2.1 and B.2.2 criteria): → **add HALF STAR to score from B.1**→ **C**

    -   No (fulfills none or just one of the two B2 criteria): **→ NO STARS** → **C**

-   Examples for B.1):

    -   License is clearly stated, but requires you to get in touch with the resource’s tech transfer office for a questionnaire → No

    -   Language such as: “contact our tech transfer office at [*xyz@example.com*](mailto:xyz@example.com)” → No

    -   Note: requiring registration may be okay, see C.

-   Examples for B.2):

    -   License applies to partial content, (e.g. onus on user to make determination of the records to which restrictive licensing applies (e.g. ClinVar, EBI, Monarch) → No

    -   License provides allowances to a vague portion of the data (e.g.“reasonable portion” may be redistributed) → No

<span id="anchor-12"></span>C) The data covered by the license is easily accessible:

**Rationale:** License without access is almost meaningless. The data provided by a resource needs to be available to research groups in a transparent and reasonable manner. Any particular content grouping at a resource should be available in its entirety with a single action once reasonable accommodations have been made with the data provider.

-   <span id="anchor-13"></span>C.1) Does the resource provide a “reasonable good-faith location” to access all data groupings with a single action, at an API endpoint or URL?

    -   Yes: **→ HALF STAR**→ C2

    -   No: **→ NO STARS** → C2

-   <span id="anchor-14"></span>C.2) Does the resource provide a “reasonable and transparent” method of obtaining access to all APIs or URLs outlined above?

    -   Yes: **→add HALF STAR to score from C1**→ **D**

    -   No: **→ NO STARS** → **D**

-   Examples “reasonable good-faith location” for data access:

    -   URL access over HTTP of entire data set → Yes

    -   Dumpable access over API endpoint (e.g. SPARQL dump) → Yes

    -   Set of HTML-only linked pages with data embedded → No

-   Examples of “reasonable and transparent” access methods:

    -   Unprotected HTTP/S access → Yes

    -   Access by API key for analytics → Yes

    -   Access by API key for access control → No

    -   Access by API key for access control, but with downloads available → Yes

<span id="anchor-15"></span>D) License has little or no restrictions on kinds of (re)use:

**Rationale:** Research groups should have the ability to legally access the data to use in their research, build upon and modify it, and publish their results. Ideally, they should be able to do so freely and without encumbrances (except possibly attribution). Forbidding certain kinds of reuse (or explicitly allowing only a narrow kind of reuse) leaves open questions about what prohibited reuse actually constitutes in practice; this determination may require legal consultation. For example, if the provider forbids ‘editing’ the data, is it a prohibition of the license to use just a fraction of the data? Change the format? Build a tool on top of it? Translate it? Because we nevertheless want to recognize any attempt at openness, we award half stars in this category as long as there are redistribution provisions (not just copy/download).

-   <span id="anchor-16"></span>D.1) Are different types of downstream reuse distinguished as allowable or as forbidden?

    -   No, all types of reuse are allowed without negotiation, allowing for “reasonable” attribution and redistribution restrictions (e.g. CC BY 4.0): **→ ONE STAR** → **E**

    -   Would a non-legal professional reasonably interpret the license to mean that individuals either in “research” or “non-commercial” contexts could work with the data (add to, modify, build on) and redistribute results without negotiation *and without requiring remixed content to have a specific license*?

        -   **D.1.1) **Yes: **→ HALF STAR** → **E**
        -   **D.1.2)** No: **→ NO STARS **→ **E** (eg. ARR)

-   Example restrictions in use and downstream reuse:

<!-- -->

-   May not be copied

-   May not be edited (e.g. invariant text clause)

-   May not be built upon (e.g. “This license forbids derivative works”)

-   May not be remixed (i.e. license limitations on how it can be combined with other data sets, such as in the case of the GPL)

-   May not be redistributed under same terms

-   May be encumbered by patents

-   May be revocable in some circumstance

-   May be under an embargo until some date or event

-   Note that while “personal use only” arguably prohibits many of the above, this is considered separately in E as a function of user, rather than use.

<span id="anchor-17"></span>E) License has little or no restrictions on who can (re)use the data:

**Rationale:** When research groups build on and modify data resources, they should be able to make these new products available for redistribution to other researchers in some unencumbered way, giving them the same opportunities to do the same. Ideally, they should be able to pass on their work freely and redistribute it to any party without restriction. Forbidding certain kinds of people or institutions (or explicitly allowing only a narrow definition of such) leaves open questions about what this means; this determination may require legal consultation. For example, if license allows non-commercial use, it may prohibit use by not-for-profit companies. If a license allows “for personal use only” it is not clear whether it permits sharing/remixing within a research group for academic purposes. Because we nevertheless want to recognize any attempt at openness, we award half stars in this category as long as there are redistribution provisions that amount to more than "personal use".

-   <span id="anchor-18"></span>E.1) Are different types of person groups or “agents” distinguished?

    -   No, all types of person groups or “agents” are allowed without negotiation, allowing for “reasonable” attribution and redistribution restrictions (e.g. CC BY 4.0): **→ ONE STAR** → **E**

    -   Would a non-legal professional reasonably interpret the license to mean that individuals either in “research” or “non-commercial” contexts could work with the data (add to, modify, build on) and redistribute results without negotiation *and without requiring remixed content to have a specific license*?

        -   **E.1.1) **Yes: **→ HALF STAR** → **DONE!**
        -   **E.1.2)** No: **→ NO STARS **→ **DONE!** (eg. ARR)

-   Example restrictions on who can (re)use data (aka discrimination classes):

    -   ***Academic***/non-academic: ½

    -   Commercial/***non-commercial***: ½

    -   ***Clinical*****/*****non-clinical***: ½

    -   Personal/non-personal: 0

    -   Profit/non-profit \[ok for non-profit means sale is still ok\]: 0

    -   Employer-specific: 0

    -   Geographical or export limitations: 0

    -   Disease-specific / research community-specific: 0

||
||
||
||
||
||

\* half star possible if some reuse possible to someone without negotiation


