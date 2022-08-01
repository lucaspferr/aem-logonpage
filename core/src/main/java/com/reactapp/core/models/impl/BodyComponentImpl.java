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
import com.reactapp.core.models.BodyComponent;
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
    BodyComponent.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/body-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BodyComponentImpl
    implements BodyComponent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String rtext1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String rtext2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String rtext3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String rtext4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String btext1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String btext2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String btext3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String btext4;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("rtext1")
    public String getRtext1() {
        return rtext1;
    }

    @Override
    @JsonProperty("rtext2")
    public String getRtext2() {
        return rtext2;
    }

    @Override
    @JsonProperty("rtext3")
    public String getRtext3() {
        return rtext3;
    }

    @Override
    @JsonProperty("rtext4")
    public String getRtext4() {
        return rtext4;
    }

    @Override
    @JsonProperty("btext1")
    public String getBtext1() {
        return btext1;
    }

    @Override
    @JsonProperty("btext2")
    public String getBtext2() {
        return btext2;
    }

    @Override
    @JsonProperty("btext3")
    public String getBtext3() {
        return btext3;
    }

    @Override
    @JsonProperty("btext4")
    public String getBtext4() {
        return btext4;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
