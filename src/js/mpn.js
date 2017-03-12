var mpnData = {
    "hipaa": {
        "protected": "Yes",
        "noticeUrl": "sdvdfg"
    },
    "use": {},
    "share": {},
    "sell": {},
    "store": {},
    "encryption": {},
    "privacy": {},
    "user": {},
    "deactivation": {},
    "policy": {},
    "breach": {},
    "contact": {}
}
function createDisplay() {
    function a(a, b, c) {
        var d;
        return d = "red" === a
            ? '<div class="answer"><div class="alert red">&#8252</div><h4>' + b + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + c + ">&#10095</p></div></div>"
            : "yellow" === a
                ? '<div class="answer"><div class="alert yellow">&#8252</div><h4>' + b + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + c + ">&#10095</p></div></div>"
                : '<div class="answer"><div class="alert green">&#10003</div><h4>' + b + '</h4><div class="more-arrow-container"><p id="more-info">info&nbsp</p><p class=' + c + ">&#10095</p></div></div>"
    }
    function b(a, b) {
        c(b),
        $(a).is(":hidden")
            ? $(a).slideDown()
            : $(a).slideUp()
    }
    function c(a) {
        $(a).toggleClass("active")
    }
    var d = ".policyDisplay",
        e = $(d).html(""),
        f = $('<header id="infoDisplay"></header>'),
        g = $('<div id="key-list"><ul><li class="key-item"><div class="alert green">&#10003</div><p>&nbspSecure</p></li><li class="key-item"><div class="alert yellow">&#8252</div><p>&nbspAware</p></li><li class="key-item"><div class="alert red">&#8252</div><p>&nbspAlert</p></li><li class="key-item"><div class="alert pink">&quest;</div><p>&nbspQuestion</p></li></ul>');
    f.append(g);
    var h = $('<div class="mpn-hipaa-container"></div>'),
        i = $('<div class="hipaa-info"></div>');
    h.append("<h3>HIPAA:</h3>"),
    h.append(i),
    "Yes" === mpnData.hipaa.protected
        ? (i.append("<p>Some of the health data we collect as part of this product also are protected by HIPAA. Read our HIPAA Notice of Privacy Practices for more information. </p>"), mpnData.hipaa.noticeUrl && i.append("<a href=" + mpnData.hipaa.noticeUrl + ' target="_blank">HIPAA Notice of Privacy Practices</a>'))
        : "No" === mpnData.hipaa.protected
            ? i.append("<p>Please note that the health data we collect as part of this product are not protected by HIPAA and our company’s HIPAA Notice of Privacy Practices does not apply.</p>")
            : i.append("<p>The developer of this product is not a HIPAA covered entity.</p>");
    var j = $('<div class="mpn-use-container"></div>'),
        k = $('<div class="use-info"></div>');
    j.append("<h3>Use:</h3>"),
    j.append(k),
    k.append("<h5>We collect and use your identifiable data:</h5>");
    var l = $("<ul>");
    k.append(l),
    mpnData.use.primaryService && l.append("<li><p>&#9642; To provide the primary service of this product</p></li>"),
    mpnData.use.marketing && l.append("<li><p>&#9642; To develop marketing materials for our products</p></li>"),
    mpnData.use.scientificResearch && l.append("<li><p>&#9642; To conduct scientific research</p></li>"),
    mpnData.use.companyOps && l.append("<li><p>&#9642; For company operations (e.g., quality control or fraud detection)</p></li>"),
    mpnData.use.development && l.append("<li><p>&#9642; To develop and improve new and current products and services (e.g., analytics)</p></li>"),
    mpnData.use.other && l.append("<li><p>&#9642; " + mpnData.use.otherDescription + "</p></li>"),
    k.append("</ul>");
    var m = $('<div class="mpn-id-container"></div>'),
        n = $('<div class="id-share"></div>'),
        o = $('<div class="id-sell"></div>'),
        p = $('<div class="share-info idShareHide"></div>'),
        q = $('<div class="sell-info idSellHide"></div>');
    m.append("<h3>Your Identifiable Data:</h3>"),
    m.append(n),
    m.append(o),
    1 == mpnData.share.noneWithId
        ? (n.append(a("green", "We do not share your indentifiable data.", "idShare-arrow")), n.append(p), p.append("<p>We DO NOT share your identifiable data</p>"))
        : (n.append(a("red", "We share your indentifiable data.", "idShare-arrow")), n.append(p), p.append("<h5>We share your data:</h5>"), mpnData.share.primaryServiceWithId && p.append("<p>&#9642; To provide the primary service of the product</p>"), mpnData.share.scientificResearchWithId && p.append("<p>&#9642; To conduct scientific research</p>"), mpnData.share.companyOpsWithId && p.append("<p>&#9642; For company operations (e.g., quality control or fraud detection)</p>"), mpnData.share.developmentWithId && p.append("<p>&#9642; To develop and improve new and current products and services (e.g., analytics)</p>"), mpnData.share.otherWithId && p.append("<p>&#9642; " + mpnData.share.otherDescriptionWithId + "</p>")),
    "Yes" === mpnData.sell.dataWithId
        ? (o.append(a("red", "We sell your identifiable data.", "idSell-arrow")), o.append(q), q.append("<p>We sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>"))
        : "Yes. With your permission," === mpnData.sell.dataWithId
            ? (o.append(a("yellow", "With your permission, we sell your identifiable data.", "idSell-arrow")), o.append(q), q.append("<p>With your permission, we sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>"))
            : (o.append(a("green", "We do not sell your identifiable data.", "idSell-arrow")), o.append(q), q.append("<p>We do not sell your identifiable data to data brokers, marketing, advertising networks, or analytics firms.</p>"));
    var r = $('<div class="mpn-nonId-container"></div>'),
        s = $('<div class="nonId-share"></div>'),
        t = $('<div class="nonId-sell"></div>'),
        u = $('<div class="share-info nonShareHide"></div>'),
        v = $('<div class="sell-info nonSellHide"></div>');
    r.append("<h3>Your Non-Identifiable Data:</h3>"),
    r.append(s),
    r.append(t),
    mpnData.share.noneNoId === !0
        ? (s.append(a("green", "We do not share your non-identifiable data.", "nonIdShare-arrow")), s.append(u), u.append("<p>We DO NOT share your data after removing identifiers</p>"))
        : (s.append(a("red", "We share your non-identifiable data.", "nonIdShare-arrow")), s.append(u), u.append("<h5>We share your data AFTER removing identifiers:</h5>"), mpnData.share.primaryServiceNoId && u.append("<p>&#9642; To provide the primary service of the product</p>"), mpnData.share.scientificResearchNoId && u.append("<p>&#9642; To conduct scientific research</p>"), mpnData.share.companyOpsNoId && u.append("<p>&#9642; For company operations (e.g., quality control or fraud detection)</p>"), mpnData.share.developmentNoId && u.append("<p>&#9642; To develop and improve new and current products and services (e.g., analytics)</p>"), mpnData.share.otherNoId && u.append("<p>&#9642; " + mpnData.share.otherDescriptionNoId + "</p>")),
    "Yes" === mpnData.sell.dataNoId
        ? (t.append(a("red", "We sell your non-identifiable data", "nonIdSell-arrow")), t.append(v), v.append("<p>We sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>"))
        : "Yes. With your permission," === mpnData.sell.dataNoId
            ? (t.append(a("yellow", "With your permission, we sell your non-identifiable data.", "nonIdSell-arrow")), t.append(v), v.append("<p>With your permission, we sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>"))
            : (t.append(a("green", "We do not sell your non-identifiable data.", "nonIdSell-arrow")), t.append(v), v.append("<p>We do not sell your data AFTER removing identifiers to data brokers, marketing, advertising networks, or analytics firms.</p>")),
    v.append("<p>(note that remaining data may still not be completely anonymous)</p>");
    var w = $('<div class="mpn-encryption-container"></div>'),
        x = $('<div class="encrypt-local"></div>'),
        y = $('<div class="encrypt-third"></div>'),
        z = $('<div class="encrypt-trans"></div>'),
        A = "Yes, by default",
        B = "Yes, when you take certain steps";
    w.append("<h3>Encryption:</h3>"),
    w.append(x),
    mpnData.encryption.device === A
        ? x.append(a("green", "By default, we encrypt your data within your device or app."))
        : mpnData.encryption.device === B
            ? x.append(a("yellow", "When you take certain steps, we encrypt your data within your device or app."))
            : "No" === mpnData.encryption.device
                ? x.append(a("red", "We do not encrypt your data."))
                : x.append('<div class="answer"><div class="alert pink">&quest;</div><h4>Will we encrypt your data within your device? Answer is N/A</h4></div>'),
    w.append(y),
    mpnData.encryption.server === A
        ? y.append(a("green", "By default, we encrypt your data when stored on our company servers or on the cloud."))
        : mpnData.encryption.server === B
            ? y.append(a("yellow", "When you take certain steps, we encrypt your data when stored on our company servers or on the cloud."))
            : "No" === mpnData.encryption.server
                ? y.append(a("red", "We do not encrypt your data when stored on our company servers or on the cloud."))
                : y.append('<div class="answer"><div class="alert pink">&quest;</div><h4>Will we encrypt your data when stored on our company servers or on the cloud? Answer is N/A</h4></div>'),
    w.append(z),
    mpnData.encryption.transmit === A
        ? z.append(a("green", "By default, we encrypt your data while it is transmitted."))
        : mpnData.encryption.transmit === B
            ? z.append(a("yellow", "When you take certain steps, we encrypt your data while it is transmitted."))
            : "No" === mpnData.encryption.transmit
                ? z.append(a("red", "We do not encrypt your data while it is transmitted."))
                : z.append('<div class="answer"><div class="alert pink">&quest;</div><h4>Will we encrypt your data while it is transmitted? Answer is N/A</h4></div>');
    var C = $('<div class="mpn-data-storage-container"></div>'),
        D = $('<div class="local-storage"></div>'),
        E = $('<div class="third-storage"></div>');
    C.append("<h3>Data Storage:</h3>"),
    C.append(D),
    "Yes" === mpnData.store.device
        ? D.append(a("yellow", "Your data is stored on your device."))
        : D.append(a("yellow", "Your data is not stored on your device.")),
    C.append(E),
    "Yes" === mpnData.store.external
        ? E.append(a("yellow", " We store your data at our company or through a third party."))
        : E.append(a("yellow", " We do not store your data at our company or through a third party."));
    var F = $('<div class="mpn-user-access-container"></div>'),
        G = $('<div id="user-qid"></div>'),
        H = $('<div class="user-options"></div>');
    F.append("<h3>User Options:</h3>"),
    F.append(G),
    G.append('<div class="answer"><div class="alert pink">&quest;</div><h4>What can you do with your data?</h4></div>'),
    G.append(H),
    "Yes" === mpnData.user.hasOptions
        ? (H.append("<h5>You can:</h5>"), mpnData.user.access && H.append("<p>&#9642; Access the data</p>"), mpnData.user.edit && H.append("<p>&#9642; Edit the data</p>"), mpnData.user.share && H.append("<p>&#9642; Share the data</p>"), mpnData.user.delete && H.append("<p>&#9642; Delete the data</p>"))
        : "No" === mpnData.user.hasOptions && H.append("<p>You can not access the data</p>");
    var I = $('<div class="mpn-privacy-container"></div>'),
        J = $('<div class="privacy-access"></div>'),
        K = $('<div class="privacy-access-info  privacyHide"></div>'),
        L = $('<div class="privacy-social"></div>');
    I.append("<h3>Privacy:</h3>"),
    I.append(J),
    "Yes" === mpnData.privacy.requestPermissions
        ? (J.append(a("yellow", "We will request access to device data or applications.", "privacy-arrow")), J.append(K), K.append("<h5>We will request access to:</h5>"), mpnData.privacy.camera && K.append("<p>&#9642; Camera</p>"), mpnData.privacy.photos && K.append("<p>&#9642; Photos</p>"), mpnData.privacy.contact && K.append("<p>&#9642; Contacts</p>"), mpnData.privacy.location && K.append("<p>&#9642; Location Services</p>"), mpnData.privacy.microphone && K.append("<p>&#9642; Microphone</p>"), mpnData.privacy.health && K.append("<p>&#9642; Health monitoring devices</p>"), mpnData.privacy.other && K.append("<p>&#9642; " + mpnData.privacy.otherDescription + "</p>"))
        : "No" === mpnData.privacy.requestPermissions && J.append(a("green", "We will not request access to device data or applications.")),
    I.append(L),
    "Yes" === mpnData.privacy.socialMedia
        ? L.append(a("red", "We share your data with social media accounts (eg.Facebook)."))
        : "Yes, only with your permission" === mpnData.privacy.socialMedia
            ? L.append(a("yellow", "With your permission , we share your data with social media accounts (eg.Facebook)."))
            : L.append(a("green", "We  do not share your data with social media accounts (eg.Facebook)."));
    var M = $('<div class="mpn-deactivation-container"></div>'),
        N = $('<div class="deactivation-info"></div>');
    M.append("<h3>Deactivation:</h3>"),
    M.append(N);
    var O = "<p>When your account is deactivated/terminated (by you or by the company), your data is&nbsp";
    if (mpnData.deactivation.action)
        switch (mpnData.deactivation.action) {
            case "deleteImmediately":
                N.append(O + "deleted Immediately.</p>");
                break;
            case "deleteAfterXYears":
                N.append(O + "deleted After " + mpnData.deactivation.numYears + " years.</p>");
                break;
            case "neverDelete":
                N.append(O + "permanently retained and used.</p>");
                break;
            case "deleteOnRequest":
                N.append(O + "retained and used until the user requests deletion.</p>")
        }
    var P = $('<div class="mpn-policy-container"></div>'),
        Q = $('<div class="policy-question"></div>'),
        R = $('<div class="policy-info"></div>');
    if (P.append("<h3>Policy Changes:</h3>"), P.append(Q), Q.append('<div class="answer"><div class="alert pink">&quest;</div><h4>How will we notify you if our privacy policy changes?</h4></div>'), mpnData.policy.notificationMethod) {
        var S = $("<p>").text(mpnData.policy.notificationMethod);
        Q.append(R),
        R.append(S)
    }
    var T = $('<div class="mpn-breach-container"></div>'),
        U = $('<div class="breach-question"></div>'),
        V = $('<div class="breach-info"></div>');
    if (T.append("<h3> Data Breach:</h3>"), T.append(U), U.append('<div class="answer"><div class="alert pink">&quest;</div><h4>How will we notify you and protect your data in case of an improper disclosure?</h4></div>'), mpnData.breach.procedure) {
        var S = mpnData.breach.procedure;
        U.append(V),
        V.append("<p>" + S + "</p>")
    }
    var W = $('<div class="mpn-contact-container"></div>'),
        X = $('<div class="contact-info"></div>');
    if (W.append("<h3>Contact Information:</h3>"), W.append(X), mpnData.contact.name) {
        var Y = $('<i class-"contact-title">').text("Name: "),
            S = $("<p>").text(mpnData.contact.name);
        X.append(Y).append(S).append("<br>")
    }
    if (mpnData.contact.privacyPolicy) {
        var Y = $('<i class-"contact-title">').text("Link to full privacy policy: "),
            S = $("<a>").text(mpnData.contact.privacyPolicy);
        X.append(Y).append(S).append("<br>")
    }
    if (mpnData.contact.onlineComments) {
        var Y = $('<i class-"contact-title">').text("Link to Online Comment/Contact Form:  "),
            S = $("<a>").text(mpnData.contact.onlineComments);
        X.append(Y).append(S).append("<br>")
    }
    if (mpnData.contact.email) {
        var Y = $('<i class-"contact-title">').text("Email Address: "),
            S = $("<p>").text(mpnData.contact.email);
        X.append(Y).append(S).append("<br>")
    }
    if (mpnData.contact.phone) {
        var Y = $('<i class-"contact-title">').text("Phone Number: "),
            S = $("<p>").text(mpnData.contact.phone);
        X.append(Y).append(S).append("<br>")
    }
    if (mpnData.contact.address) {
        var Y = $('<i class-"contact-title">').text("Address: "),
            S = $("<p>").text(mpnData.contact.address);
        X.append(Y).append(S).append("<br>")
    }
    e.append(f).append(h).append(j).append(m).append(r).append(w).append(C).append(F).append(I).append(M).append(P).append(T).append(W),
    $(document).ready(function() {
        $(".key-item").addClass("active");
        var a = parseInt($(".policyDisplay").css("width"));
        a <= 850 && $(".policyDisplay .mpn-deactivation-container .deactivation-info").css("font-size", "1em"),
        a <= 780 && ($(".policyDisplay .mpn-hipaa-container, .policyDisplay .mpn-use-container, .policyDisplay .mpn-id-container, .policyDisplay .mpn-nonId-container, .policyDisplay .mpn-contact-container, .policyDisplay .mpn-encryption-container, .policyDisplay .mpn-breach-container, .policyDisplay .mpn-privacy-container, .policyDisplay .mpn-policy-container, .policyDisplay .mpn-deactivation-container, .policyDisplay .mpn-user-access-container, .policyDisplay .mpn-data-storage-container").css("width", "97%"), $(".policyDisplay html").css("cursor", "pointer"), $(".policyDisplay #mpn-contact-anchor").css({"font-size": "1em", padding: "4px 8px"}), $(".policyDisplay .statement-styles, .policyDisplay .mpn-hipaa-container .hipaa-info, .policyDisplay .mpn-hipaa-container .use-info, .policyDisplay .mpn-use-container .hipaa-info, .policyDisplay .mpn-use-container .use-info, .policyDisplay .mpn-id-container .id-share, .policyDisplay .mpn-id-container .id-sell, .policyDisplay .mpn-id-container .nonId-share, .policyDisplay .mpn-id-container .nonId-sell, .policyDisplay .mpn-nonId-container .id-share, .policyDisplay .mpn-nonId-container .id-sell, .policyDisplay .mpn-nonId-container .nonId-share, .policyDisplay .mpn-nonId-container .nonId-sell").css("width", "90%"), $(".policyDisplay .mpn-data-storage-container .local-storage, .policyDisplay .mpn-data-storage-container .third-storage, .policyDisplay .mpn-encryption-container .encrypt-local, .policyDisplay .mpn-encryption-container .encrypt-third, .policyDisplay .mpn-encryption-container .encrypt-trans, .policyDisplay .mpn-user-access-container #user-qid, .policyDisplay .mpn-privacy-container .privacy-access, .policyDisplay .mpn-privacy-container .privacy-social, .policyDisplay .mpn-deactivation-container .deactivation-info, .policyDisplay .mpn-policy-container .policy-question, .policyDisplay .mpn-breach-container .breach-question").css("width", "90%"), $(".policyDisplay h4").css("width", "90%"), $("#key-list ul").css({display: "flex", "flex-wrap": "wrap", "justify-content": "center"})),
        a <= 550 && ($(".policyDisplay .policy-info, .policyDisplay .breach-info").css("margin-top", "20px"), $(".policyDisplay .mpn-container-styles, .policyDisplay .mpn-hipaa-container, .policyDisplay .mpn-use-container, .policyDisplay .mpn-id-container, .policyDisplay .mpn-nonId-container, .policyDisplay .mpn-data-storage-container, .policyDisplay .mpn-encryption-container, .policyDisplay .mpn-user-access-container, .policyDisplay .mpn-privacy-container, .policyDisplay .mpn-deactivation-container, .policyDisplay .mpn-policy-container, .policyDisplay .mpn-breach-container, .policyDisplay .mpn-contact-container").css("margin-bottom", "6px")),
        a <= 420 && ($(".policyDisplay .answer h4").css({"font-size": "1em", width: "75%"}), $(".policyDisplay #key-list .key-item:first-child").css("margin-left", "20px"), $(".policyDisplay #key-list .key-item.active").css("padding", " 0 2px 0 2px"), $(".policyDisplay #key-list .alert").css({height: "25px", width: "25px"}), $(".policyDisplay .info-styles, .policyDisplay .mpn-id-container .share-info, .policyDisplay .mpn-id-container .sell-info, .policyDisplay .mpn-nonId-container .share-info, .policyDisplay .mpn-nonId-container .sell-info, .policyDisplay .mpn-user-access-container .user-options, .policyDisplay .mpn-privacy-container .privacy-access-info, .policyDisplay .mpn-policy-container .policy-question .policy-info, .policyDisplay .mpn-breach-container .breach-question .breach-info").css({width: "80%", margin: "0 0 0 40px"}))
    }),
    $(".policyDisplay").on("click", ".id-share", function() {
        b(".idShareHide", ".idShare-arrow")
    }),
    $(".policyDisplay").on("click", ".id-sell", function() {
        b(".idSellHide", ".idSell-arrow")
    }),
    $(".policyDisplay").on("click", ".nonId-sell", function() {
        b(".nonSellHide", ".nonIdSell-arrow")
    }),
    $(".policyDisplay").on("click", ".nonId-share", function() {
        b(".nonShareHide", ".nonIdShare-arrow")
    }),
    $(".policyDisplay").on("click", ".privacy-access", function() {
        b(".privacyHide", ".privacy-arrow")
    })
}
createDisplay();