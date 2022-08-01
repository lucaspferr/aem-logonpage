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
import com.reactapp.core.models.LoginComponent;
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
    LoginComponent.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/login-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class LoginComponentImpl
    implements LoginComponent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String paragraph;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String logintext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String usertext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String passwordtext;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttontext;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("paragraph")
    public String getParagraph() {
        return paragraph;
    }

    @Override
    @JsonProperty("logintext")
    public String getLogintext() {
        return logintext;
    }

    @Override
    @JsonProperty("usertext")
    public String getUsertext() {
        return usertext;
    }

    @Override
    @JsonProperty("passwordtext")
    public String getPasswordtext() {
        return passwordtext;
    }

    @Override
    @JsonProperty("buttontext")
    public String getButtontext() {
        return buttontext;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
