/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.FooterComponent;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    FooterComponent.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/footer-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FooterComponentImpl
    implements FooterComponent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String footertext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttontext1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttontext2;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("footertext")
    public String getFootertext() {
        return footertext;
    }

    @Override
    @JsonProperty("buttontext1")
    public String getButtontext1() {
        return buttontext1;
    }

    @Override
    @JsonProperty("buttontext2")
    public String getButtontext2() {
        return buttontext2;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
