"use client";

import { useEmploymentTypesStore } from "@/app/store/EmployMentTypes";
import { useWorkPlaceTypesStore } from "@/app/store/WorkPlaceTypes";
import { useYearEXPStore } from "@/app/store/yearExps";
import Link from "next/link";
import { DefaultValues } from "./FindAJobMainPage";
import { useCategoriesStore } from "@/app/store/MainCategories";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "@/app/utils/mainData";

const FilterationPart = ({
  defaultValues,
  handleChange,
  Region,
}: {
  defaultValues: DefaultValues;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  Region: string;
}) => {
  const [currCategory, setCurrCategory] = useState<string>("");
  const { employmentTypes } = useEmploymentTypesStore();
  const { workPlaceTypes } = useWorkPlaceTypesStore();
  const { yearEXPs } = useYearEXPStore();
  const { categories } = useCategoriesStore();

  const [currSubCategory, setCurrSubCategory] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const getCurrSubCategInsideMainCategories = useCallback(async () => {
    if (currCategory) {
      const toastId = toast.loading("Loading...");
      const data: { category_id: string } = {
        category_id: currCategory,
      };
      setSelectedSubCategory("");
      try {
        const res = await axios.post(
          `${baseUrl}/sub-categories?t=${new Date().getTime()}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setCurrSubCategory(res?.data?.data);
        toast.update(toastId, {
          render: res?.data?.message || "Success! Sub-Categories loaded.",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.update(toastId, {
            render:
              error.response?.data?.message || "Error loading Sub-Categories!",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    }
  }, [currCategory]);

  useEffect(() => {
    if (currCategory) {
      getCurrSubCategInsideMainCategories();
    }
  }, [currCategory]);

  return (
    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="sidebar-shadow none-shadow mb-30">
        <div className="sidebar-filters">
          <div className="filter-block head-border mb-30">
            <h5>
              Advance Filter
              <Link legacyBehavior href={`/${Region}/jobs/find-job`}>
                <a className="link-reset">Reset</a>
              </Link>
            </h5>
          </div>
          <div className="filter-block mb-30">
            <h5 className="medium-heading mb-15">Years Of Experience</h5>
            <div className="form-group">
              <select
                onChange={handleChange}
                name="year_exp"
                value={defaultValues.year_exp}
                className="form-control form-icons select-active"
              >
                <option value={""} disabled>
                  Select Years Of Experience
                </option>
                {yearEXPs.map((yearExp) => (
                  <option key={yearExp?.id} value={yearExp?.id}>
                    {yearExp.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="filter-block mb-30">
            <h5 className="medium-heading mb-15">Employment Type</h5>
            <div className="form-group">
              <select
                onChange={handleChange}
                name="employment_type"
                value={defaultValues.employment_type}
                className="form-control form-icons select-active"
              >
                <option value={""} disabled>
                  Select Employment Type
                </option>
                {employmentTypes.map((empType) => (
                  <option key={empType?.id} value={empType?.id}>
                    {empType.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="filter-block mb-30">
            <h5 className="medium-heading mb-15">Work Place Type</h5>
            <div className="form-group">
              <select
                onChange={handleChange}
                name="work_place_type"
                value={defaultValues.work_place_type}
                className="form-control form-icons select-active"
              >
                <option value={""} disabled>
                  Work Place Type
                </option>
                {workPlaceTypes.map((workPlaceType) => (
                  <option key={workPlaceType?.id} value={workPlaceType?.id}>
                    {workPlaceType.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="filter-block mb-30">
            <h5 className="medium-heading mb-15">Main Category</h5>
            <div className="form-group">
              <select
                onChange={(e) => setCurrCategory(e.target.value)}
                name="mainCateg"
                value={currCategory}
                className="form-control form-icons select-active"
              >
                <option value={""} disabled>
                  Main Category
                </option>
                {categories.map((categ) => (
                  <option key={categ?.id} value={categ?.id}>
                    {categ.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="filter-block mb-30">
            <h5 className="medium-heading mb-15">Sub Category</h5>
            <div className="form-group">
              <select
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                name="SubCateg"
                value={selectedSubCategory}
                className="form-control form-icons select-active"
              >
                <option value={""} disabled>
                  Sub Category
                </option>
                {currSubCategory?.map((subCateg) => (
                  <option key={subCateg?.id} value={subCateg?.id}>
                    {subCateg.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterationPart;
