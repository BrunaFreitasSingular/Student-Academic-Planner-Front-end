"use client"

import { useEffect, useState } from "react"
import { getSubjects } from "../services/subjectService"
import { SubjectFromAPI } from "../types/subject"

export default function useSubjects(){

    const [subjects, setSubjects] = useState<SubjectFromAPI[]>([])
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        async function loadSubjects() {
            try {
                setIsLoading(true);
                const data = await getSubjects()
                setSubjects(data)
            } catch (error) {
                console.error("Erro ao buscar disciplinas:", error)
            } finally{
                setIsLoading(false)
            }
        }
        
        loadSubjects()
    }, [])

    return{subjects: subjects || []}
}