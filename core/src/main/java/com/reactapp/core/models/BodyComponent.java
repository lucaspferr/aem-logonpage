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

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code BodyComponent} Sling Model used for the {@code reactapp/components/body-component} component.
 * 
 */
@ConsumerType
public interface BodyComponent
    extends ComponentExporter
{


    @JsonProperty("rtext1")
    String getRtext1();

    @JsonProperty("rtext2")
    String getRtext2();

    @JsonProperty("rtext3")
    String getRtext3();

    @JsonProperty("rtext4")
    String getRtext4();

    @JsonProperty("btext1")
    String getBtext1();

    @JsonProperty("btext2")
    String getBtext2();

    @JsonProperty("btext3")
    String getBtext3();

    @JsonProperty("btext4")
    String getBtext4();

}
