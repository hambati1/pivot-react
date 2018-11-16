﻿import * as React from "react";
import * as ReactDOM from "react-dom";

declare module 'react-flexmonster' {

    interface Params {
        // params
        toolbar?: boolean;
        licenseKey?: string;
        width?: string | number;
        height?: string | number;
        componentFolder?: string;
        report?: Report | string;
        global?: Report;
        customizeCell?: (cell: CellBuilder, data: CellData) => void;
        customizeContextMenu?: (items: ContextMenuItem[], data: CellData | ChartData, viewType: string) => ContextMenuItem[];
        // events
        cellclick?: Function;
        celldoubleclick?: Function;
        dataerror?: Function;
        datafilecancelled?: Function;
        dataloaded?: Function;
        datachanged?: Function;
        fieldslistclose?: Function;
        fieldslistopen?: Function;
        filterclose?: Function;
        filteropen?: Function;
        fullscreen?: Function;
        loadingdata?: Function;
        loadinglocalization?: Function;
        loadingolapstructure?: Function;
        loadingreportfile?: Function;
        localizationerror?: Function;
        localizationloaded?: Function;
        olapstructureerror?: Function;
        olapstructureloaded?: Function;
        openingreportfile?: Function;
        querycomplete?: Function;
        queryerror?: Function;
        ready?: Function;
        reportchange?: Function;
        reportcomplete?: Function;
        reportfilecancelled?: Function;
        reportfileerror?: Function;
        reportfileloaded?: Function;
        runningquery?: Function;
        update?: Function;
        beforetoolbarcreated?: Function;
        beforegriddraw?: Function;
        aftergriddraw?: Function;
        afterchartdraw?: Function;
        // other
        container?: Element | string;
    }

    class Pivot extends React.Component<Params, any> {
        flexmonster: Pivot;

        addCalculatedMeasure(measure: Measure): void;
        addCondition(condition: ConditionalFormat): void;
        addJSON(json: Object[]): void;
        alert(options: { title?: string; message?: string; type?: string; buttons?: { label: string; handler?: Function; }[]; blocking?: boolean; }): void;
        clear(): void;
        clearFilter(hierarchyName: string): void;
        clearXMLACache(proxyUrl: string, databaseId: string, callbackHandler: Function | string, cubeId: string, measuresGroupId: string, username?: string, password?: string): void;
        closeFieldsList(): void;
        collapseAllData(): void;
        collapseData(hierarchyName: string): void;
        connectTo(object: DataSource, callbackHandler: Function | string): void;
        customizeCell(customizeCellFunction: (cell: CellBuilder, data: CellData) => void): void;
        customizeContextMenu(customizeFunction: (items: ContextMenuItem[], data: CellData | ChartData, viewType: string) => ContextMenuItem[]): void;
        dispose(): void;
        expandAllData(withAllChildren?: boolean): void;
        expandData(hierarchyName: string): void;
        exportTo(type: string, exportOptions?: ExportOptions, callbackHandler?: Function | string): void;
        getAllConditions(): ConditionalFormat[];
        getAllHierarchies(): Hierarchy[];
        getAllMeasures(): Measure[];
        getCell(rowIdx: number, colIdx: number): CellData;
        getColumns(): Hierarchy[];
        getCondition(id: string): ConditionalFormat;
        getData(options: { slice?: Slice }, callbackHandler: Function | string, updateHandler?: Function | string): void;
        getFilter(hierarchyName: string): FilterItem[];
        getFilterProperties(hierarchyName: string): FilterProperties;
        getFormat(measureName: string): Format;
        getMeasures(): Measure[];
        getMembers(hierarchyName: string, memberName: string, callbackHandler: Function | string): Member[];
        getOptions(): Options;
        getReportFilters(): Hierarchy[];
        getReport(format?: string): Report | string;
        getRows(): Hierarchy[];
        getSelectedCell(): CellData | CellData[];
        getSort(hierarchyName: string): string;
        getXMLACatalogs(proxyURL: string, dataSource: string, callbackHandler: Function | string, username?: string, password?: string): void;
        getXMLACubes(proxyURL: string, dataSource: string, catalog: string, callbackHandler: Function | string, username?: string, password?: string): void;
        getXMLADataSources(proxyURL: string, callbackHandler: Function | string, username?: string, password?: string): void;
        getXMLAProviderName(proxyURL: string, callbackHandler: Function | string, username?: string, password?: string): string;
        load(url: string, componentFolder?: string): void;
        on(eventType: string, handler: Function | string): void;
        off(eventType: string, handler?: Function | string): void;
        open(): void;
        openFieldsList(): void;
        openFilter(hierarchyName: string): void;

        print(options?: PrintOptions): void;
        refresh(): void;
        removeAllCalculatedMeasures(): void;
        removeAllConditions(): void;
        removeCalculatedMeasure(uniqueName: string): void;
        removeCondition(id: string): void;
        removeSelection(): void;
        runQuery(slice: Slice): void;
        save(filename: string, destination: string, callbackHandler?: Function | string, url?: string, embedData?: boolean): string;
        setBottomX(hierarchyName: string, num: number, measure: MeasureObject): void;
        setFilter(hierarchyName: string, items: string[], negation?: boolean): void;
        setFormat(format: Format, measureName: string): void;
        setOptions(options: Options): void;
        setReport(report: Report): void;
        setSort(hierarchyName: string, sortName: string, customSorting?: string[]): void;
        setTopX(hierarchyName: string, num: number, measure: MeasureObject): void;
        showCharts(type?: string, multiple?: boolean): void;
        showGrid(): void;
        showGridAndCharts(type?: string, position?: string, multiple?: boolean): void;
        sortingMethod(hierarchyName: string, compareFunction: Function): void;
        sortValues(axisName: string, type: string, tuple: number[], measure: MeasureObject): void;
        updateData(object: DataSource | Object[]): void;
        version: number;
        fusioncharts?: {
            getData(options: { type: string; slice?: Slice; prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
            getNumberFormat(format: Object): Object;
        };
        googlecharts?: {
            getData(options: { type?: string; slice?: Slice; prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
            getNumberFormat(format: Object): Object;
            getNumberFormatPattern(format: Object): string;
        };
        highcharts?: {
            getData(options: { type?: string; slice?: Slice; xAxisType?: string; valuesOnly?: boolean, withDrilldown?: boolean, prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
            getAxisFormat(format: Object): string;
            getPointXFormat(format: Object): string;
            getPointYFormat(format: Object): string;
            getPointZFormat(format: Object): string;
        };
    }

    interface Report {
        dataSource?: DataSource;
        slice?: Slice;
        options?: Options;
        conditions?: ConditionalFormat[];
        formats?: Format[];
        tableSizes?: {
            columns?: ColumnSize[];
            rows?: RowSize[];
        };
        localization?: Object | string;
    }

    interface DataSource {
        browseForFile?: boolean;
        catalog?: string;
        cube?: string;
        data?: Object[];
        dataSourceInfo?: string;
        dataSourceType?: string;
        fieldSeparator?: string;
        filename?: string;
        ignoreQuotedLineBreaks?: boolean;
        proxyUrl?: string;
        recordsetDelimiter?: string;
        binary?: boolean;
        roles?: string;
        localeIdentifier?: string;
        effectiveUserName?: string;
        customData?: string;
        hash?: string;
        username?: string;
        password?: string;
    }

    interface Slice {
        columns?: Hierarchy[];
        measures?: Measure[];
        reportFilters?: Hierarchy[];
        rows?: Hierarchy[];
        drills?: {
            drillAll?: boolean;
            columns?: { tuple: string[]; measure?: MeasureObject; }[];
            rows?: { tuple: string[]; measure?: MeasureObject; }[];
        };
        expands?: {
            expandAll?: boolean;
            columns?: { tuple: string[]; measure?: MeasureObject; }[];
            rows?: { tuple: string[]; measure?: MeasureObject; }[];
        };
        sorting?: {
            column?: { type: string; tuple: string[]; measure: MeasureObject; };
            row?: { type: string; tuple: string[]; measure: MeasureObject; };
        };
        drillThrough?: string[];
    }

    interface Options {
        chart?: {
            activeMeasure?: MeasureObject;
            activeTupleIndex?: number;
            autoRange?: boolean;
            labelsHierarchy?: string;
            multipleMeasures?: boolean;
            oneLevel?: boolean;
            showFilter?: boolean;
            showLegendButton?: boolean;
            showMeasures?: boolean;
            showWarning?: boolean;
            title?: string;
            type?: string;
            showDataLabels?: boolean;
        };
        grid?: {
            showFilter?: boolean;
            showGrandTotals?: string;
            showHeaders?: boolean;
            showHierarchies?: boolean;
            showHierarchyCaptions?: boolean;
            showReportFiltersArea?: boolean;
            showTotals?: boolean;
            title?: string;
            type?: string;
            showAutoCalculationBar?: boolean;
            dragging?: boolean;
            grandTotalsPosition: string;
        };
        configuratorActive?: boolean;
        configuratorButton?: boolean;
        datePattern?: string;
        dateTimePattern?: string;
        defaultHierarchySortName?: string;
        drillThrough?: boolean;
        editing?: boolean;
        selectEmptyCells?: boolean;
        showAggregations?: boolean;
        showCalculatedValuesButton?: boolean;
        showDefaultSlice?: boolean;
        showMemberProperties?: boolean;
        sorting?: string;
        viewType?: string;
        showAggregationLabels?: boolean;
        useOlapFormatting?: boolean;
        defaultDateType?: string;
        timePattern?: string;
    }

    interface PrintOptions {
        header?: string;
        footer?: string;
    }

    interface Member {
        caption?: string;
        uniqueName?: string;
        hierarchyName?: string;
        children?: Member[];
        isLeaf?: boolean;
        parentMember?: string;
    }

    interface FilterProperties {
        type: string;
        members?: FilterItem[];
        quantity?: number;
        measure?: MeasureObject;
    }

    interface FilterItem {
        caption?: string;
        uniqueName?: string;
        hierarchyName?: string;
    }

    interface CellData {
        columnIndex?: number;
        columns?: Object[];
        escapedLabel?: string;
        height?: number;
        hierarchy?: Hierarchy;
        isClassicTotalRow?: boolean;
        isDrillThrough?: boolean;
        isGrandTotal?: boolean;
        isGrandTotalColumn?: boolean;
        isGrandTotalRow?: boolean;
        isTotal?: boolean;
        isTotalColumn?: boolean;
        isTotalRow?: boolean;
        member?: Member;
        width?: number;
        x?: number;
        y?: number;
        label?: string;
        measure?: MeasureObject;
        rowIndex?: number;
        rows?: Object[];
        type?: string;
        value?: number;
    }

    interface ExportOptions {
        filename?: string;
        destinationType?: string;
        excelSheetName?: string;
        footer?: string;
        header?: string;
        pageOrientation?: string;
        showFilters?: boolean;
        url?: string;
        useOlapFormattingInExcel?: boolean;
    }

    interface Hierarchy {
        caption?: string;
        dimensionName?: string;
        filter?: {
            members?: string[];
            negation?: boolean;
            measure?: MeasureObject;
            quantity?: number;
            type?: string;
        };
        sortName?: string;
        sortOrder?: string[];
        uniqueName?: string;
    }

    interface Measure {
        uniqueName?: string;
        active?: boolean;
        aggregation?: string;
        availableAggregations?: string[];
        caption?: string;
        formula?: string;
        format?: string;
        grandTotalCaption?: string;
    }

    interface MeasureObject {
        uniqueName: string;
        aggregation?: string;
    }

    interface ConditionalFormat {
        formula?: string;
        format?: Style;
        formatCSS?: string;
        row?: number;
        column?: number;
        measureName?: string;
        hierarchy?: string;
        member?: string;
        isTotal?: number;
    }

    interface Style {
        color?: string;
        backgroundColor?: string;
        backgroundImage?: string;
        borderColor?: string;
        fontSize?: string;
        fontWeight?: string;
        fill?: string;
        textAlign?: string;
        fontFamily?: string;
        width?: number;
        maxWidth?: number;
        height?: number;
        maxHeight?: number;
    }

    interface Format {
        name?: string;
        thousandsSeparator?: string;
        decimalSeparator?: string;
        decimalPlaces?: number;
        maxDecimalPlaces?: number;
        maxSymbols?: number;
        currencySymbol?: string;
        currencySymbolAlign?: string;
        nullValue?: string;
        infinityValue?: string;
        divideByZeroValue?: string;
        textAlign?: string;
    }

    interface ColumnSize {
        width?: number;
        idx?: number;
        tuple?: string[];
        measure?: MeasureObject;
    }

    interface RowSize {
        height?: number;
        idx?: number;
        tuple?: string[];
        measure?: MeasureObject;
    }

    interface CellBuilder {
        attr?: Object;
        classes?: string[];
        style?: Object;
        tag?: string;
        text?: string;
        addClass(value?: string): void;
        toHtml(): string;
    }

    interface ContextMenuItem {
        label?: string;
        handler?: Function | string;
        submenu?: ContextMenuItem[];
        isSelected?: boolean;
    }

    interface ChartData {
        columnTuple?: number[];
        id?: string;
        label?: string;
        measure?: MeasureObject;
        rawTuple?: number[];
        value?: number;
    }
}